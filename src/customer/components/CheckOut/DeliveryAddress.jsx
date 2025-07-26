import React, { useState } from 'react';
import { Grid, Button, Box, TextField } from '@mui/material';
import { AddressCard } from "../AddressForm/AddressForm";
import { useNavigate } from 'react-router-dom';
export const DeliveryAddress = () => {
    const navigate=useNavigate();

    const HandleOrderSummary=()=>{
        navigate('/checkout?step=3')
    }



  const [address, setAddress] = useState({});

  const handleSubmite = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setAddress({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      address: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zip: data.get('zip'),
      phone: data.get('phone'),
    });
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4} lg={3} sx={{ m: { xs: 0, sm: 1, md: 2 } }}>
        <Box sx={{ border: 1, borderColor: 'white', boxShadow: 3, borderRadius: 2, height: '30.5rem', overflowY: 'scroll' }} ml={5} width={500} mt={4}>
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard {...address} />
            <Button onClick={HandleOrderSummary}
              sx={{ mt: 2, bgcolor: 'rgb(145, 85, 253)' }}
              size="large"
              variant="contained"
              fullWidth
              type="submit"
            >
              Deliver Here
            </Button>
          </div>
        </Box>
      </Grid>

      <Grid item xs={12} md={8} lg={9} sx={{ m: { xs: 0, sm: 1, md: 2 } }}>
        <Box sx={{ border: 1, borderColor: 'white', boxShadow: 3, borderRadius: 2, p: 3 }} width={500} ml={5} mt={4}>
          <form onSubmit={handleSubmite}> 
            <Grid container direction="column" spacing={3}>
              {/* Row 1: First Name & Last Name */}
              <Grid container item spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>
              {/* Row 2: Address */}
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="street-address"
                  multiline
                  rows={4}
                />
              </Grid>
              {/* Row 3: City & State/Province/Region */}
              <Grid container item spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="address-level1"
                  />
                </Grid>
              </Grid>
              {/* Row 4: Zip/Postal Code & Phone Number */}
              <Grid container item spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
              </Grid>
              {/* Row 5: Deliver Here Button */}
              <Grid item xs={12}>
                <Button
                  sx={{ mt: 2, bgcolor: 'rgb(145, 85, 253)' }}
                  size="large"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  DELIVER HERE
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};