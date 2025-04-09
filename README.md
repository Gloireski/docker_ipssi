# 🚀 Déploiement d'une Application MERN avec Docker (sans Docker Compose)

Ce projet reprend une application MERN développée en cours, et la déploie **localement avec Docker** sans utiliser Docker Compose.

## 📦 Objectifs

- Conteneuriser le frontend (Next.js) et le backend (Node.js + Express)
- Lancer une base de données MongoDB dans un conteneur
- Utiliser Redis pour le caching
- Connecter tous les conteneurs via un réseau Docker personnalisé
- Accéder à l'application via `http://localhost:8080`

---

## 🛠️ Étapes

### 1️⃣ Création du réseau Docker

```bash
docker network create hacka-net
```
