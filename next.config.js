/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    'MYSQL_HOST': 'localhost',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'crud',
    'MYSQL_USER': 'root',
    'MYSQL_PASSWORD': '',
}, 
}

module.exports = nextConfig