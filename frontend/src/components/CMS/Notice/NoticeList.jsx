import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useDeleteMutation, useListAllQuery } from '@/api/notice.api';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import LoadingComponent from '@/components/common/Loading/Loading.component';
import { Pagination } from 'flowbite-react';

const NoticeList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); 
  const [search, setSearch] = useState('');

  const {data, isLoading, error} = useListAllQuery({page, limit, search});
  const [deleteNotice] = useDeleteMutation();

  const noticeList = data?.result || [];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const deleteData = async(id)=>{
      try{
        await deleteNotice(id).unwrap()
        Swal.fire({
          icon: 'success',
          title: 'Notice deleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
        setPage(1);
      }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Failed to delete Notice',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  

  return (
    <div  className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle label1=' Notice List' />
        <div className='Dashboard_title'>
          <h1>Notice List</h1>
          <div>
          <input type="search" className='search_btn' placeholder='Search here by name...' value={search} onChange={handleSearchChange}/>
          <Link to='/admin/add_notice'>
            <button className='edit_btn'>Add Notice</button>
          </Link> 
          </div>
        </div>      
      </div> 
      <div className='blog_table'>
        
          <table border='2'>
            <thead>
            <tr>
                <th>S.N</th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Summary</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>  
                  <td colSpan="6"><LoadingComponent/></td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="6" className="error-message">
                    {error.data?.message || "Something went wrong while fetching banners."}
                  </td>
                </tr>
              ) :  noticeList.length > 0 ? (
                noticeList.map((row, index) => (
                  <tr key={index}>
                    <td className="table_sn">{index + 1}</td>
                    <td>{row.title}</td>
                    <td>{row.category}</td>
                    <td>{row.date.slice(0,10)}</td>
                    <td>{row.summary}</td>
                    <td>{row.priority}</td>
                    <td style={{ textAlign: 'center', width: '150px' }}>
                      <EditButton editUrl={`/admin/edit_notice/${row._id}`}/>
                      <DeleteButton deleteAction={deleteData} rowId={row._id}  />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Notice List is Empty</td>
                </tr>
              )}
            </tbody>
          </table>       
        <div className='flex overflow-x-auto sm:justify-center'>
          { data?.meta && data?.meta.total > 0 &&  (
          <div className='flex overflow-x-auto sm:justify-center'>
            <Pagination
              currentPage={Number(data.meta.currentPage)}
              totalPages={Math.ceil(data.meta.total / limit)}
              onPageChange={handlePageChange}
            />
          </div>
        )}
        </div>
      </div>

    </div>
  )
}

export default NoticeList