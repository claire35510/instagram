let posts = []; // Tableau pour stocker les liens dynamiques

exports.handler = async (event) => {
    if (event.httpMethod === "POST") {
        try {
            // Parse le corps de la requête pour récupérer les nouveaux liens
            const body = JSON.parse(event.body);
            if (Array.isArray(body.posts)) {
                posts = body.posts; // Met à jour les liens d'images
            }

            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Links updated successfully!" }),
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid request format" }),
            };
        }
    }

    // Si la méthode est GET, retourne les liens actuels
    if (event.httpMethod === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify(posts),
        };
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method Not Allowed" }),
    };
};