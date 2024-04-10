import { useParams } from 'react-router-dom';

export const Page1DetailA = () => {
    const { id } = useParams();
    console.log(id); // パラメータ "id" の値をログに出力

    return (
        <div>
            <h1>Page1DetailAページです</h1>
            <p>Parameter: {id}</p>
        </div>
    );
};
