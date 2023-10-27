import PropTypes from 'prop-types';

function RepositoriesCard(props) {
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
                <h2>{props?.name}</h2>
                <a>{props?.html_url}</a>
                <p>{props?.description}</p>
                <p>{props?.language}</p>
                <p>{parseDate(props?.updated_at)}</p>
            </div>
        </section>
    );
}

RepositoriesCard.propTypes = {
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
}

export default RepositoriesCard;