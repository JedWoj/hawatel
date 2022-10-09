import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Card from "../UI/Card";

const UserForm = () => {
    const [radioValue, setRadioValue] = useState<string>('male');
    const [wasSent, setWasSent] = useState<boolean>(false);
    const [wasTryed, setWasTryed] = useState<boolean>(false);

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(e.target.value);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            gender: null,
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email format").required("Email is required"),
            name: Yup.string().trim().min(5, "Name must be atleast 5 chars long").required("Please Enter your name"),
        }),
        onSubmit: async () => {    
            try {
                const user = {
                    email: formik.values.email,
                    name: formik.values.name,
                    gender: radioValue,
                    status: "active",
                }
                const sentData = await fetch(`https://gorest.co.in/public/v1/users`, {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        "Authorization": `Bearer 769712f72e9310ca8011f1516deaaf58b55c2a21f48b36309db2583e2079f1d4`,
                        "content-type": 'application/json',
                    }
                })
                if(!sentData.ok) throw new Error();  
                const response = await sentData.json();
                setWasTryed(true);
                setWasSent(true);
                formik.resetForm(); 
            } catch (error) {
                setWasTryed(true);
                setWasSent(false);
            }
        }
    });
    
    return(
        <div className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[33%] mx-auto">
            <Card>
                <form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                        className="text-cyan-600 outline-none"
                        id="email" 
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                    <label htmlFor="password">
                        Full name
                    </label>
                    <input 
                        className="text-cyan-600 outline-none"
                        id="name" 
                        type='text' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
                    <div className="flex justify-center">
                        <label htmlFor="male">
                            Male
                        </label>
                        <input
                            defaultChecked 
                            id="male"
                            value="male"
                            name="gender" 
                            type='radio' 
                            onChange={handleChecked} 
                            onBlur={formik.handleBlur}
                            className={'ml-1'}
                        />
                        <label className="ml-4" htmlFor="female">
                            Female
                        </label>
                        <input 
                            id="female" 
                            value="female" 
                            name="gender"
                            type='radio'
                            onChange={handleChecked} 
                            onBlur={formik.handleBlur}
                            className={'ml-1'}
                        />
                    </div>
                    <button className="bg-violet-400 w-[30%] h-8 mx-auto mt-4" type="submit">
                        Add user
                    </button>
                </form> 
                
            </Card>
                {wasSent && <Card><div className="text-center">User added Successfully</div></Card>}
                {!wasSent && wasTryed && <Card><div className="text-center">Something went wrong</div></Card>}
        </div>
    )
}

export default UserForm;