import { useState } from 'react';
import Card from "../UI/Card";
import { useFormik } from "formik";
import * as Yup from 'yup';
import FormRequestStatusInfo from './FormRequestStatusInfo';

const PostForm = () => {
    const [wasSent, setWasSent] = useState<boolean>(false);
    const [wasTryed, setWasTryed] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            id: '',
            user_id: '',
            title: '',
            body: '',
        },
        validationSchema: Yup.object({
            id: Yup.string().required("Post ID is rquired!"),
            user_id: Yup.number().max(2360, "Max userID is 2360").required("UserID is required!"),
            title: Yup.string().trim().required("Title is required!"),
            body: Yup.string().trim().required("Body is required!"),
        }),
        onSubmit: async () => {    
            try {
                const post = {
                    id: formik.values.id,
                    user_id: formik.values.user_id,
                    title: formik.values.title,
                    body: formik.values.body,
                }
                const sentData = await fetch(`https://gorest.co.in/public/v1/posts`, {
                    method: 'POST',
                    body: JSON.stringify(post),
                    headers: {
                        "Authorization": `Bearer 769712f72e9310ca8011f1516deaaf58b55c2a21f48b36309db2583e2079f1d4`,
                        "Content-Type": "application/json",
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
        <div className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[33%] mx-auto mt-6 pb-5">
            <h2 className="font-semibold text-xl my-2 text-center">
                Add new post!
            </h2>
            <Card>
                <form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
                    <label htmlFor="id">
                        id
                    </label>
                    <input 
                        className="text-cyan-600 outline-none"
                        id="id" 
                        type="number"
                        value={Number(formik.values.id).toFixed()}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.id && formik.errors.id ? <p>{formik.errors.id}</p> : null}
                    <label htmlFor="user_id">
                        user_id
                    </label>
                    <input 
                        className="text-cyan-600 outline-none"
                        id="user_id" 
                        type='number' 
                        value={Number(formik.values.user_id).toFixed()}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.user_id && formik.errors.user_id ? <p>{formik.errors.user_id}</p> : null}
                    <label htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        value={formik.values.title} 
                        type='text' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        className='text-cyan-600 outline-none'
                    />
                    {formik.touched.title && formik.errors.title ? <p>{formik.errors.title}</p> : null}
                    <label htmlFor="body">
                        Body
                    </label>
                    <textarea 
                        id="body" 
                        value={formik.values.body} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        className='text-cyan-600 outline-none'
                    />
                    {formik.touched.body && formik.errors.body ? <p>{formik.errors.body}</p> : null}
                    <button className="bg-violet-400 w-[30%] h-8 mx-auto mt-4" type="submit">
                        Add user
                    </button>
                </form>
            </Card>
            {wasSent && <FormRequestStatusInfo status='User Successfully Added!'/>}
            {!wasSent && wasTryed && <FormRequestStatusInfo status='Something Went Wrong!'/>}
        </div>
    )
}

export default PostForm;