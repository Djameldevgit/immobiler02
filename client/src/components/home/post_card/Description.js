import React from "react";
 
const Description = ({ post }) => {
  return (
    <div className="description-container">
      {/* Sección de atributos del post */}
      <div className="attributes">
        <h4>Atributos del Post</h4>
        <ul>
          {post.attributes && Object.keys(post.attributes).length > 0 ? (
            Object.entries(post.attributes).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))
          ) : (
            <li>No hay atributos disponibles</li>
          )}
        </ul>
      </div>

      {/* Sección de información del post */}
      <div className="post-info">
        <h4>Detalles del Post</h4>
        <div className="info-item">
          <i className="fas fa-comment"></i>
          <span>Comentarios: {post.comments.length || "0"}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-thumbs-up"></i>
          <span>Likes: {post.likes.length || "0"}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-map"></i>
          <span>Ubicación: {post.commune || "No especificado"}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <span>Email: {post.email || "No especificado"}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-user-circle"></i>
          <span>Vendedor: {post.informacion || "No especificado"}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-comments"></i>
          <span>Permitir comentarios: {post.comentarios || "No especificado"}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-eye"></i>
          <span>Visitas: {post.contadordevisitas || "No especificado"}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-clock"></i>
          <span>Duración del anuncio: {post.duraciondelanuncio || "No especificado"}</span>
        </div>
      </div>
    </div>
  );
};

export default Description;
