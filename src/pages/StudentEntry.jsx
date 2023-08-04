import { Link } from "react-router-dom";

const StudentEntry = () => {



    const handleStudentInfo = event => {
        event.preventDefault()
        const formData = event.target;
        const result = {};
        result.stuId = formData.studentId.value;
        result.stuName = formData.studentName.value;
        result.time = new Date();
        console.log(result);
    };



    return (
        <>
            <div className='p-5'>
                <h1 className='school-name'>Student Information</h1>
                <Link to={'/'} className="btn btn-ghost btn-outline">Go Home</Link>

                <form onSubmit={handleStudentInfo} className='form-div'>

                    <div className=''>
                        <label htmlFor="studentId">Student Id</label>
                        <br />
                        <input className='input-student-name' type="number" name="studentId" id="studentId" placeholder='Enter Student ID' required />
                    </div>

                    <div className=''>
                        <label htmlFor="studentName">Student Full Name</label>
                        <br />
                        <input className='input-student-name' type="text" name="studentName" id="studentName" placeholder='Type Name' required />
                    </div>

                    <div>
                        <input className="btn btn-outline btn-primary shadow-lg" type="submit" value={'Enter'} />
                    </div>

                </form>


            </div>
        </>
    );
};

export default StudentEntry;