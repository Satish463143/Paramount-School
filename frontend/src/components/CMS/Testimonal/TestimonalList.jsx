import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useDeleteMutation, useListAllQuery } from '@/api/testimonal.api';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import LoadingComponent from '@/components/common/Loading/Loading.component';
import { Pagination } from 'flowbite-react';

const TestimonalList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); 
  const [search, setSearch] = useState('');

  const {data, isLoading, error} = useListAllQuery({page, limit, search});
  const [deleteTestimonal] = useDeleteMutation();

  const testimonalList = data?.result || [];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const deleteData = async(id)=>{
      try{
        await deleteTestimonal(id).unwrap()
        Swal.fire({
          icon: 'success',
          title: 'Testimonal deleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
        setPage(1);
      }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Failed to delete Testimonal',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  

  return (
    <div  className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle label1=' Testimonal List' />
        <div className='Dashboard_title'>
          <h1>Testimonal List</h1>
          <div>
          <input type="search" className='search_btn' placeholder='Search here by name...' value={search} onChange={handleSearchChange}/>
          <Link to='/admin/add_testimonal'>
            <button className='edit_btn'>Add Testimonal</button>
          </Link> 
          </div>
        </div>      
      </div> 
      <div className='blog_table'>
        
          <table border='2'>
            <thead>
            <tr>
                <th>S.N</th>
                <th>Image</th>
                <th>Name</th>
                <th>Role</th>
                <th>Message</th>
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
              ) :  testimonalList.length > 0 ? (
                testimonalList.map((row, index) => (
                  <tr key={index}>
                    <td className="table_sn">{index + 1}</td>
                    <td className='table_img'>
                      <img src={row.avatar} alt="" />
                    </td>
                    <td>{row.author}</td>
                    <td>{row.role}</td>
                    <td>{row.message}</td>
                    <td style={{ textAlign: 'center', width: '150px' }}>
                      <EditButton editUrl={`/admin/edit_testimonal/${row._id}`}/>
                      <DeleteButton deleteAction={deleteData} rowId={row._id}  />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Testimonal List is Empty</td>
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

export default TestimonalList