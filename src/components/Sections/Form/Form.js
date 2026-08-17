'use client';
import { useState } from 'react';
import styles from './Form.module.scss'
import Card from '@/components/UI/Card/Card'
import Button from '@/components/UI/Button/Button'
import { motion } from "motion/react";


export default function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        style: '',
        date: '',
        time: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyNu-rp0UN8y08grlG4oZKSeP014nHJ_lvOhYyV2LKFPE4G3R4jguEwpRwzX9Z-Y06K/exec';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const validateForm = () => {
        const { name, email, contact, style, date, time } = formData;

        if (!name.trim() || !email.trim() || !contact || !style || !date || !time ) {
            return 'Please fill in all required fields.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address.';
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            alert(validationError);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    contact: formData.contact,
                    style: formData.style,
                    date: formData.date,
                    time: formData.time
                })
            });

            const result = await response.json();

            if (result.status === 'success') {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', contact: '', style: '', date: '', time: '' });
            } else {
                setSubmitStatus('error');
            }

        } catch (error) {
            setSubmitStatus('error');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section id='form' className={styles.formSection}
            initial={{ scale: 0, y: 40 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <Card className={styles.formCard}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <h3>Reserve Your Time</h3>
                            <p>Select your preferred date and time</p>
                            <div className={styles.field}>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="Enter Name"
                                    required
                                    disabled={isSubmitting}
                                
                                />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="jane@company.com"
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="079 380 0.."
                                    disabled={isSubmitting}
                                    required
                                />
                                <label htmlFor="style">
                                    <select
                                        id="style"
                                        name="style"
                                        value={formData.style}
                                        onChange={handleChange}
                                        className={styles.formSelect}
                                        disabled={isSubmitting}
                                        required
                                    >
                                        <option value="">Select Style</option>
                                        <option value="wash">Wash</option>
                                        <option value="braids">Braids</option>
                                        <option value="conrose">Conrose</option>
                                        <option value="installation">Installation</option>
                                        <option value="dye">Dye</option>
                                        <option value="consulting">Not Sure Yet / Consulting</option>
                                    </select>
                                </label>
                            </div>
                            <div className={styles.field}>
                                <input
                                    className={styles.date}
                                    type='date'
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    required
                                />
                                <input
                                    className={styles.time}
                                    type='time'
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Book Slot'}
                            </Button>

                            {/* Status Messages */}

                            {submitStatus === 'success' && (
                                <div className={styles.successMessage}>
                                    🚀 Thanks for reaching out! We'll be in touch shortly.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className={styles.errorMessage}>
                                    Something went wrong. Please try again or email us at hello@atum.digital
                                </div>
                            )}
                        </form>
                    </Card>
                </div>
            </div>
        </motion.section>
    )

}