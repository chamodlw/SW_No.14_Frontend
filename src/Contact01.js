import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

export default function Contact01() {
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      message: ""
    }
  });
  const { reset } = form;

  const onSubmit = (data) => {
    console.log(data); 
    reset(); 
    alert("Your message has been sent!"); 
  };

  return (
   
    <FormProvider {...form}>
      
      <Box sx={{ width: '80%',paddingLeft:'2rem'}}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1>Contact Us</h1><hr/>

        <div style={{margin:'3rem'}}>
        <h4>Name</h4>
        <NameField /><br/>
        <br/>
        <h4>Email</h4>
        <EmailField/>
        <br/><br/>
        <h4>Phone number</h4>
        <PhoneNumberField/>
        <br/><br/>
       <h4> Message</h4>
        <MessageField/>
        <br/><br/>
        
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        </div>
      </form>
      </Box>
      
    </FormProvider>
    
  );
}


const NameField = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
 <TextField
      label="Name"
      name="name"
      required
      error={!!errors.name}
      helperText={errors.name?.message}
      {...register("name", {
        minLength: { value: 3, message: "Name must be at least 3 characters long" },
        maxLength: { value: 20, message: "Name must be no more than 20 characters long" },
      })}
    />
   
  );
};
const EmailField = () => {
  const { register, formState: { errors } } = useFormContext(); 
  const emailRegex = new RegExp(
    "[^ @]*@[^ @]*"
  );
  return (
    <TextField
      label="Email"
      name="email"
      required 
      error={!!errors.email} 
      helperText={errors.email?.message} 
      {...register("email", {
        pattern: { value: emailRegex, message: "Email must be a valid email address" }, 
      })}
    />
  );
};
const PhoneNumberField = () => {
  const { register, formState: { errors } } = useFormContext(); // use the useFormContext hook to access the form methods and values
  // create a state variable to store the phone number value
  const [value, setValue] = React.useState();
  return (
    <TextField
      label="Phone Number"
      name="phone_number"
      required 
      error={!!errors.phone_number} 
      helperText={errors.phone_number?.message} // set the helperText prop to the error message if there is an error in the phone number field
      value={value} // pass the value state variable to the value prop
      onChange={setValue} // pass the setValue function to the onChange prop
      {...register("phone_number", { // use the register function to register the phone number field with validation rules
        minLength: { value: 10, message: "Phone number must be at least 10 digits long" }, // set the minimum length rule and message
        maxLength: { value: 15, message: "Phone number must be no more than 15 digits long" }, // set the maximum length rule and message
      })}
    />
  );
};
const MessageField = () => {
  const { register, formState: { errors } } = useFormContext(); // use the useFormContext hook to access the form methods and values
  return (
    <TextField
      label="Message"
      name="message"
      required // set the required prop to true
      error={!!errors.message} // set the error prop to true if there is an error in the message field
      helperText={errors.message?.message} // set the helperText prop to the error message if there is an error in the message field
      multiline // set the multiline prop to true to make it a text area
      rows={4} // set the rows prop to 4 to adjust the height of the text area
      maxLength={500} // set the maxLength prop to 500 to limit the number of characters in the message
      {...register("message", { // use the register function to register the message field with validation rules
        maxLength: { value: 500, message: "Message must be no more than 500 characters long" }, // set the maximum length rule and message
      })}
    />
  );
};