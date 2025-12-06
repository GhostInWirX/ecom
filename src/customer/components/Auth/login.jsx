import React, { useState, useEffect } from "react"
import {
    Dialog,
    Button,
    Box,
    TextField,
    Typography,
    IconButton,
    InputAdornment,
    Divider,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function LoginForm({ open, handleClose, onSwitchToRegister }) {
    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    // Debug: Component mount/unmount
    useEffect(() => {
        return () => {
        }
    }, [])

    // Debug: Track open prop changes
    useEffect(() => {
    }, [open])

    // Debug: Track onSwitchToLogin prop
    useEffect(() => {
    }, [onSwitchToRegister])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
    };

    const handleSwitchClick = () => {
        if (onSwitchToRegister) {
            onSwitchToRegister();
        }
        else {
            console.log("Something Unexpected Happens")
        }
    }

    const handleDialogClose = (event, reason) => {
        if (handleClose) {
            handleClose();
        }
    }
    return (

        <Dialog
            open={open}
            onClose={handleDialogClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    overflow: "visible",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                }
            }}
        >
            <Box sx={{ position: "relative" }}>
                <IconButton
                    onClick={() => {
                        if (handleClose) handleClose()
                    }}
                    sx={{
                        position: "absolute",
                        right: 10,
                        top: 10,
                        zIndex: 1,
                        color: "gray",
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.05)'
                        }
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Box sx={{ p: 4, pt: 5 }}>
                    {/* Header Section */}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 64,
                                height: 64,
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                borderRadius: "16px",
                                mb: 2,
                                boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)"
                            }}
                        >
                            <PersonOutlineIcon sx={{ fontSize: 32, color: 'white' }} />
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                color: '#1a1a1a',
                                mb: 0.5
                            }}
                        >
                            Welcome back ! Login
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#666',
                                fontSize: '14px'
                            }}
                        >
                           Sign In To Your Account To Continue
                        </Typography>
                    </Box>

     {/* Form Section */}
                    <form onSubmit={handleSubmit}>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2.5}}>
                            {/* Email Field */}
                            <TextField
                                fullWidth
                                name="email"
                                label="Email Address"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailOutlinedIcon sx={{color: '#999'}} />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        '&:hover fieldset': {
                                            borderColor: '#667eea',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#667eea',
                                        }
                                    }
                                }}
                            />

                            {/* Password Field */}
                            <TextField
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                onChange={handleChange}
                                required
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon sx={{color: '#999'}} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        '&:hover fieldset': {
                                            borderColor: '#667eea',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#667eea',
                                        }
                                    }
                                }}
                            />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 1,
                                    py: 1.5,
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
                                        boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5)',
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </form>

<Divider sx={{my: 3}}>
                        <Typography variant="body2" sx={{color: '#999', fontSize: '13px'}}>
                            OR
                        </Typography>
                    </Divider>

                    {/* Sign In Link */}
                    <Box sx={{textAlign: 'center'}}>
                        <Typography variant="body2" sx={{color: '#666', fontSize: '14px'}}>
                            Already have an account?{' '}
                            <Typography
                                component="span"
                                sx={{
                                    color: '#667eea',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                }}
                                onClick={handleSwitchClick}
                            >
                                Sign Up
                            </Typography>
                        </Typography>
                    </Box>

                    
                </Box>
            </Box>
        </Dialog>
    )

}