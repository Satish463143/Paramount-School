import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useDeleteMutation, useListAllQuery } from '@/api/banner.api';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import LoadingComponent from '@/components/common/Loading/Loading.component';
import { Pagination } from 'flowbite-react';

const BannerList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); 
  const [search, setSearch] = useState('');

  const {data, isLoading, error} = useListAllQuery({page, limit, search});
  const [deleteBanner] = useDeleteMutation();

  const bannerList = data?.result || [];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const deleteData = async(id)=>{
      try{
        await deleteBanner(id).unwrap()
        Swal.fire({
          icon: 'success',
          title: 'Banner deleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
        setPage(1);
      }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Failed to delete banner',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  

  return (
    <div  className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle label1=' Contact List' />
        <div className='Dashboard_title'>
          <h1>Contact List</h1>
          <div>
          <input type="search" className='search_btn' placeholder='Search here by title...' value={search} onChange={handleSearchChange}/>
          <Link to='/admin/add_banner'>
            <button className='edit_btn'>Add Bannner</button>
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
                <th>Title</th>
                <th>Sub Title</th>
                <th>Status</th>
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
              ) :  bannerList.length > 0 ? (
                bannerList.map((row, index) => (
                  <tr key={index}>
                    <td className="table_sn">{index + 1}</td>
                    <td className='table_img'>
                      <img src={row.image} alt="" />
                    </td>
                    <td>{row.headline}</td>
                    <td>{row.subheadline}</td>
                    <td>{row.status}</td>
                    <td style={{ textAlign: 'center', width: '150px' }}>
                      <EditButton editUrl={`/admin/edit_banner/${row._id}`}/>
                      <DeleteButton deleteAction={deleteData} rowId={row._id}  />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Banner List is Empty</td>
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

export default BannerList