import * as Yup from 'yup'; 

export const inquireSchemas = Yup.object({
    name: Yup.string().min(3, 'Name must be at least 3 characters').max(50, 'Name must be at most 50 characters').required('Name is required'),
    mobile: Yup.string().min(10, 'Mobile must be at least 10 characters').max(15, 'Mobile must be at most 15 characters').required('Mobile is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    vehicleBrand: Yup.mixed().required('Vehicle brand is required'),
    vin: Yup.string()
        .required('VIN is required'),
    interestedProduct: Yup.string()
        .required('Interested product is required'),
    location: Yup.string()
        .required('Location is required'),
})