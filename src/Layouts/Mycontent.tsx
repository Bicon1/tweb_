
import { Row } from 'antd';
import CustomCard from './CustomCard';

const description = [
    {
        id: 1,
        title: "Titlul Cardului 1",
        description: "description"
    },
    {
        id: 2,
        title: "Titlul Cardului 2",
        description: "description"
    },
    {
        id: 3,
        title: "Titlul Cardului 3",
        description: "description"
    },
    {
        id: 4,
        title: "Titlul Cardului 4",
        description: "description"
    },
    {
        id: 5,
        title: "Titlul Cardului 5",
        description: "description"
    },
    {
        id: 6,
        title: "Titlul Cardului 6",
        description: "description"
    },
    {
        id: 7,
        title: "Titlul Cardului 7",
        description: "description"
    },
    {
        id: 8,
        title: "Titlul Cardului 8",
        description: "description"
    },
    {
        id: 9,
        title: "Titlul Cardului 9",
        description: "description"
    },
]


function Mycontent() {
    return (

        <Row gutter={16} >
            {
                description.map((element, i) => {
                    return (
                        <CustomCard key={element.id} title={element.title} description={element.description}/>
                    )
                })
            }
        </Row>
    )
}

export default Mycontent