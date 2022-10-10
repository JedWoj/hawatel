import Card from "../UI/Card";

interface FormRequestStatusInfoType {
    status: string,
}

const FormRequestStatusInfo = ({status}: FormRequestStatusInfoType) => {
    return(
        <Card>
            <div className="text-center">
                {status}
            </div>
        </Card>
    )
}

export default FormRequestStatusInfo;