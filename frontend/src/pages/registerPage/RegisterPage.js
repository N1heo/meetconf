import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './RegisterPage.module.css';

export function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        conferences: [],
    });

    const [error, setError] = useState('');
    const [conferences, setConferences] = useState([]);

    // Fetch conferences data when the component mounts
    useEffect(() => {
        const fetchConferences = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/conferences/');
                setConferences(response.data.results);
            } catch (error) {
                console.error('Error fetching conferences:', error);
                setError('Failed to fetch conferences.');
            }
        };

        fetchConferences();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                conferences: checked
                    ? [...prevState.conferences, parseInt(value)]
                    : prevState.conferences.filter(conf => conf !== parseInt(value))
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Clear previous errors

        // Ensure required fields are not empty
        if (!formData.name || !formData.email || !formData.role || formData.conferences.length === 0) {
            setError('Please fill out all fields and select at least one conference.');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/conference_users/', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error.response.data);
            setError('Failed to register. Please check the form and try again.');
        }
    }

    return (
        <div className={classes.register}>
            <div className={classes.container}>
                <div className={classes.register_inner}>
                    <div className={classes.register_form}>
                        <h2>Registration Form</h2>
                        {error && <div className={classes.error}>{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className={classes.form_group}>
                                <label htmlFor='name'>Name:</label>
                                <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className={classes.form_group}>
                                <label htmlFor='email'>Email:</label>
                                <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className={classes.form_group}>
                                <label htmlFor='role'>Role:</label>
                                <select id='role' name='role' value={formData.role} onChange={handleChange} required>
                                    <option value="">Select your role</option>
                                    <option value={1}>Student</option>
                                    <option value={2}>Professor</option>
                                    <option value={3}>Scientist</option>
                                    <option value={4}>Teacher</option>
                                </select>
                            </div>
                            <div className={classes.form_group2}>
                                <label htmlFor='conference' className={classes.conf}>Conferences:</label>
                                <div className={classes.checkbox_groups}>
                                    {conferences.map(conference => (
                                        <div className={classes.check} key={conference.id}>
                                            <label>{conference.name}</label>
                                            <input
                                                type="checkbox"
                                                name="conference"
                                                value={conference.id}
                                                onChange={handleChange}
                                                checked={formData.conferences.includes(conference.id)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button type='submit'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
