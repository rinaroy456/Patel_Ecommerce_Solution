import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    const [firstName, setFirstName] = useState('Md');
    const [lastName, setLastName] = useState('Rimel');
    const [email, setEmail] = useState('rimel1111@gmail.com');
    const [address, setAddress] = useState('Kingston, 5236, United States');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Logic to handle form submission
        console.log('Profile updated:', { firstName, lastName, email, address, currentPassword, newPassword });
    };

    const styles = {
        accountPage: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9f9f9',
            minHeight: '100vh',
        },
        accountHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 40px',
            backgroundColor: '#fff',
            borderBottom: '1px solid #eaeaea',
        },
        headerTitle: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#000',
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
            gap: '20px',
        },
        navItem: {
            textDecoration: 'none',
            color: '#555',
            fontSize: '16px',
        },
        accountInfo: {
            color: '#e47575',
            fontSize: '16px',
        },
        accountContainer: {
            display: 'flex',
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        sidebar: {
            width: '250px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            marginRight: '40px',
        },
        sidebarTitle: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333',
        },
        sidebarList: {
            listStyle: 'none',
            padding: '0',
        },
        sidebarLink: {
            textDecoration: 'none',
            color: '#555',
            padding: '10px 0',
            display: 'block',
            fontSize: '16px',
        },
        activeLink: {
            color: '#e47575',
            fontWeight: 'bold',
        },
        accountContent: {
            flexGrow: '1',
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        formGroup: {
            width: '100%',
            marginBottom: '20px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
        },
        formActions: {
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
        },
        button: {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        cancelButton: {
            backgroundColor: '#ccc',
            color: '#fff',
        },
        saveButton: {
            backgroundColor: '#e47575',
            color: 'white',
        },
        footer: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#fff',
            borderTop: '1px solid #eaeaea',
            marginTop: '40px',
        },
    };

    return (
        <div style={styles.accountPage}>
            <div style={styles.accountHeader}>
                <h1 style={styles.headerTitle}>Exclusive</h1>
                <nav>
                    <ul style={styles.nav}>
                        <li><Link to="/" style={styles.navItem}>Home</Link></li>
                        <li><Link to="/contact" style={styles.navItem}>Contact</Link></li>
                        <li><Link to="/about" style={styles.navItem}>About</Link></li>
                        <li><Link to="/signup" style={styles.navItem}>Sign Up</Link></li>
                    </ul>
                </nav>
                <div style={styles.accountInfo}>
                    <p>Welcome! <strong>Md Rimel</strong></p>
                </div>
            </div>

            <div style={styles.accountContainer}>
                <div style={styles.sidebar}>
                    <h3 style={styles.sidebarTitle}>Manage My Account</h3>
                    <ul style={styles.sidebarList}>
                        <li><Link to="/account/profile" style={{ ...styles.sidebarLink, ...styles.activeLink }}>My Profile</Link></li>
                        <li><Link to="/account/address-book" style={styles.sidebarLink}>Address Book</Link></li>
                        <li><Link to="/account/payment-options" style={styles.sidebarLink}>My Payment Options</Link></li>
                        <li><Link to="/account/orders" style={styles.sidebarLink}>My Orders</Link></li>
                        <li><Link to="/account/returns" style={styles.sidebarLink}>My Returns</Link></li>
                        <li><Link to="/account/cancellations" style={styles.sidebarLink}>My Cancellations</Link></li>
                        <li><Link to="/account/wishlist" style={styles.sidebarLink}>My Wishlist</Link></li>
                    </ul>
                </div>

                <div style={styles.accountContent}>
                    <h2>Edit Your Profile</h2>
                    <form onSubmit={handleSaveChanges}>
                        <div style={styles.profileSection}>
                            <div style={styles.formGroup}>
                                <label htmlFor="firstName" style={styles.label}>First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="lastName" style={styles.label}>Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                        </div>

                        <div style={styles.profileSection}>
                            <div style={styles.formGroup}>
                                <label htmlFor="email" style={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="address" style={styles.label}>Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                        </div>

                        <div style={styles.passwordSection}>
                            <div style={styles.formGroup}>
                                <label htmlFor="currentPassword" style={styles.label}>Current Password</label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="newPassword" style={styles.label}>New Password</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="confirmPassword" style={styles.label}>Confirm New Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                        </div>

                        <div style={styles.formActions}>
                            <button type="button" style={{ ...styles.button, ...styles.cancelButton }}>Cancel</button>
                            <button type="submit" style={{ ...styles.button, ...styles.saveButton }}>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>

            <footer style={styles.footer}>
                <div>
                    <p>&copy; 2022 Exclusive. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Account;
