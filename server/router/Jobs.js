const express = require('express')
const JobList = require('../models/jobOpenings');
const authMiddleware = require('../Middlewares/auth');
const JobRouter = express.Router()


//get all the jobs
JobRouter.get('/jobs', async (req, res) => {
    try {
        const allJobs = await JobList.find({});
        res.status(200).json(allJobs);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

//create new jobs
JobRouter.post('/admin/createJob',authMiddleware, async (req, res) => {
    try {
        const { title, jobDescription, experience, salary } = req.body;

        if (!title || !jobDescription || !experience) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newJob = new JobList({
            title,
            jobDescription,
            experience,
            salary,
        });

        await newJob.save();
        res.status(201).json({ message: 'Job created successfully', newJob });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

//update job
JobRouter.put('/admin/updateJob/:id',authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, jobDescription, experience, salary } = req.body;

        
        const updatedJob = await JobList.findByIdAndUpdate(
            id,
            { title, jobDescription, experience, salary },
            { new: true, runValidators: true } // Returns the updated job & validates input
        );

        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json({ message: 'Job updated successfully', updatedJob });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});


// Delete a job
JobRouter.delete('/admin/deleteJob/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedJob = await JobList.findByIdAndDelete(id);

        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json({ message: 'Job deleted successfully', deletedJob });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});


// Get a specific job by ID
JobRouter.get('/jobs/:jobId', async (req, res) => {
    try {
        const { jobId } = req.params;
        const job = await JobList.findById(jobId);

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});


module.exports = JobRouter