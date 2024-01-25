// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

class AuthMiddleware {
  static authenticateToken(req, res, next) {
    const token = req.cookies.token; //requisisão do token nos cookies de sessão

    if (!token) { //se não tiver nada no token, é renderizado o login
      return res.status(401).render('login', { error: 'Unauthorized. Please login.' });
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET); //o token com conteúdo e a chave 
      req.userId = decodedToken.userId;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).render('login', { error: 'Unauthorized. Please login.' });
    }
  }
}

module.exports = AuthMiddleware;