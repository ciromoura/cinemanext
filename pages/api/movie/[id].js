import { apiBase, apiKey } from '../../../lib/tmdb';

export default async function handler(req, res) {

    let q = req.query.id;

    const result = await fetch(`${apiBase}/movie/${q}?api_key=${apiKey}&language=pt-BR`);
    const json = await result.json();

    res.status(200).json({
        info: json
    });
  }
  