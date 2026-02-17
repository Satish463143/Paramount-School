import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useListAllQuery } from '@/api/contact.api';
import LoadingComponent from '@/components/common/Loading/Loading.component';
import { Pagination } from 'flowbite-react';

const ContactList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); 
  const [search, setSearch] = useState('');

  const {data, isLoading, error} = useListAllQuery({page, limit, search});

  const contactList = data?.result || [];
  console.log('contactList',data)

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  

  return (
    <div  className='admin_margin_box'>
      <div className='admin_titles'>
        <AdminTitle label1=' Contact List' />
        <div className='Dashboard_title'>
          <h1>Contact List</h1>
          <div>
          <input type="search" className='search_btn' placeholder='Search here by title...' value={search} onChange={handleSearchChange}/>
                    
          </div>
        </div>      
      </div> 
      <div className='blog_table'>
        
          <table border='2'>
            <thead>
            <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>                
                <th>Message</th>
                <th>Subject</th>
                <th>Submitted At</th>
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
              ) :  contactList.length > 0 ? (
                contactList.map((row, index) => (
                  <tr key={index}>
                    <td className="table_sn">{index + 1}</td>
                    <td className='table_img'>{row.name}</td>
                    <td>{row.number}</td>
                    <td>{row.email}</td>
                    <td>{row.message}</td>
                    <td>{row.subject}</td>
                    <td>{row.createdAt.slice(0, 10)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Contact List is Empty</td>
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

export default ContactList