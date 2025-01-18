let posts = []; // Stocker les liens d'images

exports.handler = async (event) => {
    if (event.httpMethod === "POST") {
        try {
            // Récupérer les données envoyées par le client
            const body = JSON.parse(event.body);

            // Vérifier que les données sont bien au format attendu
            if (body[0]?.tab && Array.isArray(body[0].tab)) {
                posts = body[0].tab; // Mettre à jour les images
            }

            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Images updated successfully!" }),
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid request format" }),
            };
        }
    }

    // Retourner les images via une requête GET
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