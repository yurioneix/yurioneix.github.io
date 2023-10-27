import { useEffect, useState } from "react";

function Repositories() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function getRepos() {
            const request = await fetch("https://api.github.com/users/yurioneix/repos");
            const repos = await request.json();
            setRepos(repos);
            console.log(repos)
            return repos;
        }
        getRepos();
    }, [])

    const parseDate = (string) => {
        const data = new Date(string);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }

    return (
        <section>
            <div>
                <h2>{repos[0]?.name}</h2>
                <a>{repos[0]?.html_url}</a>
                <p>{repos[0]?.description}</p>
                <p>{repos[0]?.language}</p>
                <p>{parseDate(repos[0]?.updated_at)}</p>
            </div>
        </section>
    );
}

export default Repositories;