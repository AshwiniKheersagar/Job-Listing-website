import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import SingleJobPage,{jobLoader} from './pages/SingleJobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const Job = () => {
    //Add new job
  const addJob= async(newJob) => {
    const res=await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob),

    });
    return;
  };

  //delete job
  const deleteJob=async(id)=>{
    console.log('delete '+id);
    const res=await fetch(`/api/jobs/${id}`,{
      method:'DELETE',

    });
    return;
  };

  //Update job
  const updateJob=async(job)=>{
    const res=await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job),              //npm run build npm run preview

    });
    return;
    
};
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>   

        <Route path='/jobs/:id' element={<SingleJobPage deleteJob={deleteJob} />} loader={jobLoader}/>   
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Job;
