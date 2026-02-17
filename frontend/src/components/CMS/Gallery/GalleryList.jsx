import React, { useState } from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useDeleteMutation as useDeleteGallery, useListAllQuery as useListGalleries } from '@/api/gallery.api'
import { useDeleteMutation as useDeleteCategory, useListAllQuery as useListCategories } from '@/api/galleryCategory.api'
import DeleteButton from '../DeleteButton/DeleteButton'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import LoadingComponent from '@/components/common/Loading/Loading.component'

const GalleryList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [page, setPage] = useState(1)
  const [limit] = useState(1000)
  const [search, setSearch] = useState('')

  // Fetch galleries and categories
  const { data: galleriesData, isLoading: galleriesLoading, error: galleriesError } = useListGalleries({ page, limit, search })
  const { data: categoriesData, isLoading: categoriesLoading } = useListCategories({ page: 1, limit: 100 })
  
  const [deleteGallery] = useDeleteGallery()
  const [deleteCategory] = useDeleteCategory()

  const galleries = galleriesData?.result || []
  const categories = categoriesData?.result || []

  // Filter galleries by selected category
  const filteredGalleries = selectedCategory === 'all' 
    ? galleries 
    : galleries.filter(gallery => 
        gallery.category?.some(cat => cat._id === selectedCategory || cat === selectedCategory)
      )

  const handleDeleteGallery = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })

      if (result.isConfirmed) {
        await deleteGallery(id).unwrap()
        Swal.fire({
          icon: 'success',
          title: 'Gallery deleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    } catch (exception) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to delete gallery',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const handleDeleteCategory = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Delete Category?',
        text: "This will not delete the galleries in this category.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })

      if (result.isConfirmed) {
        await deleteCategory(id).unwrap()
        Swal.fire({
          icon: 'success',
          title: 'Category deleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
        // Reset to 'all' if deleted category was selected
        if (selectedCategory === id) {
          setSelectedCategory('all')
        }
      }
    } catch (exception) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to delete category',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <div className='admin_margin_box'>
      <div className="admin_titles">
        <AdminTitle label1=" Gallery Management" />
        <div className='Dashboard_title'>
          <h1>Gallery Management</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to='/admin/add_gallery'>
              <button className='edit_btn'>+ Add Gallery</button>
            </Link>
            <Link to='/admin/add_gallery_category'>
              <button className='edit_btn' style={{ background: '#10b981' }}>+ Add Category</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Categories Management Section */}
      <div style={{ marginBottom: '30px', background: '#f9fafb', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Gallery Categories</h2>
        {categoriesLoading ? (
          <LoadingComponent />
        ) : categories.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
            {categories.map((category) => (
              <div 
                key={category._id} 
                style={{ 
                  background: 'white', 
                  padding: '15px', 
                  borderRadius: '8px', 
                  border: '1px solid #e5e7eb',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <img 
                  src={category.image} 
                  alt={category.title}
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'cover', 
                    borderRadius: '6px' 
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{category.title}</h3>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>{category.tagline}</p>
                </div>
                <button
                  onClick={() => handleDeleteCategory(category._id)}
                  style={{
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    width: '28px',
                    height: '28px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                  title="Delete category"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: '#6b7280', fontStyle: 'italic' }}>No categories yet. Create one to organize your galleries.</p>
        )}
      </div>

      {/* Category Filter Tabs */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '8px 16px',
              border: 'none',
              background: selectedCategory === 'all' ? '#3b82f6' : '#f3f4f6',
              color: selectedCategory === 'all' ? 'white' : '#374151',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: selectedCategory === 'all' ? '600' : '400',
              transition: 'all 0.2s'
            }}
          >
            All ({galleries.length})
          </button>
          {categories.map((category) => {
            const count = galleries.filter(g => 
              g.category?.some(cat => cat._id === category._id || cat === category._id)
            ).length
            return (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category._id)}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  background: selectedCategory === category._id ? '#3b82f6' : '#f3f4f6',
                  color: selectedCategory === category._id ? 'white' : '#374151',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: selectedCategory === category._id ? '600' : '400',
                  transition: 'all 0.2s'
                }}
              >
                {category.title} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* Galleries Grid */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>
          {selectedCategory === 'all' ? 'All Galleries' : `${categories.find(c => c._id === selectedCategory)?.title || ''} Galleries`}
        </h2>
        
        {galleriesLoading ? (
          <LoadingComponent />
        ) : galleriesError ? (
          <div style={{ padding: '20px', textAlign: 'center', color: '#ef4444' }}>
            {galleriesError.data?.message || "Something went wrong while fetching galleries."}
          </div>
        ) : filteredGalleries.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '20px' 
          }}>
            {filteredGalleries.map((gallery) => (
              <div 
                key={gallery._id}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  position: 'relative',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <img 
                  src={gallery.image} 
                  alt={gallery.title}
                  style={{ 
                    width: '100%', 
                    height: '180px', 
                    objectFit: 'cover' 
                  }}
                />
                <div style={{ padding: '12px' }}>
                  <h3 style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    marginBottom: '8px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {gallery.title}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
                    {gallery.category?.map((cat, idx) => {
                      const categoryName = typeof cat === 'string' 
                        ? categories.find(c => c._id === cat)?.title 
                        : cat.title
                      return (
                        <span 
                          key={idx}
                          style={{
                            fontSize: '10px',
                            padding: '2px 8px',
                            background: '#dbeafe',
                            color: '#1e40af',
                            borderRadius: '12px'
                          }}
                        >
                          {categoryName || 'Unknown'}
                        </span>
                      )
                    })}
                  </div>
                  <button
                    onClick={() => handleDeleteGallery(gallery._id)}
                    style={{
                      width: '100%',
                      padding: '6px',
                      background: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ 
            padding: '40px', 
            textAlign: 'center', 
            background: '#f9fafb', 
            borderRadius: '8px',
            color: '#6b7280'
          }}>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>No galleries found</p>
            <p style={{ fontSize: '14px' }}>
              {selectedCategory === 'all' 
                ? 'Add your first gallery to get started' 
                : 'No galleries in this category yet'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryList