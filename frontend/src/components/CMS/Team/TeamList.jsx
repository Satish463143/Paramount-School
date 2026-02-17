import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useDeleteMutation, useListAllQuery } from '@/api/team.api';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import LoadingComponent from '@/components/common/Loading/Loading.component';
import { Pagination } from 'flowbite-react';

const TeamList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); 
  const [search, setSearch] = useState('');

  const {data, isLoading, error} = useListAllQuery({page, limit, search});
  const [deleteTeam] = useDeleteMutation();

  const teamList = data?.result || [];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const deleteData = async(id)=>{
      try{
        await deleteTeam(id).unwrap()
        Swal.fire({
          icon: 'success',
          title: 'Team deleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
        setPage(1);
      }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Failed to delete team',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  

  return (
    <div  className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle label1=' Team List' />
        <div className='Dashboard_title'>
          <h1>Team List</h1>
          <div>
          <input type="search" className='search_btn' placeholder='Search here by name...' value={search} onChange={handleSearchChange}/>
          <Link to='/admin/add_team'>
            <button className='edit_btn'>Add Team</button>
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
                <th>Qualification</th>
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
              ) :  teamList.length > 0 ? (
                teamList.map((row, index) => (
                  <tr key={index}>
                    <td className="table_sn">{index + 1}</td>
                    <td className='table_img'>
                      <img src={row.image} alt="" />
                    </td>
                    <td>{row.name}</td>
                    <td>{row.role}</td>
                    <td>{row.qualification}</td>
                    <td style={{ textAlign: 'center', width: '150px' }}>
                      <EditButton editUrl={`/admin/edit_team/${row._id}`}/>
                      <DeleteButton deleteAction={deleteData} rowId={row._id}  />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Team List is Empty</td>
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

export default TeamList