import { useEffect, useState } from "react";
import RepositoriesCard from "./RepositoriesCard";

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

    return (
       <>
        { 
            repos.map((repo) => 
            <RepositoriesCard 
              name={repo?.name}
              html_url={repo?.html_url}
              description={repo?.description}
              language={repo?.language}
              updated_at={repo?.updated_at}
              key={repo.id}
            />
            )
        }
       </>
    );
}

export default Repositories;