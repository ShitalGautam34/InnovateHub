import admin from "firebase-admin";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ error: "Unauthorized: No token provided." });
  }

  const idToken = authHeader.split("Bearer ")[1];

  try {
    // Verify the token using the Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    // Attach the user's info to the request object
    req.user = decodedToken;
    next(); // Token is valid, proceed to the route handler
  } catch (error) {
    return res.status(403).send({ error: "Forbidden: Invalid token." });
  }
};
