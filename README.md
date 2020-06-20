# API_WEB_CLIENT
## npm install
## Tạo thư mục .env với nội dung (coi kỹ .env.example)

// TEST
# database connection
PG_DATABASE="ioiort_web_tin_tuc"
PG_USER="postgres"
PG_PASSWORD="eru_1309_38190"
PG_HOST="103.63.115.22"
PG_PORT=5432
PG_MAX_CONNECTION=100
PG_MIN_CONNECTION=1
PG_IDLE_TIMEOUT=10000
PG_APP_NAME="api_web_client_news"

# database hợp tác doanh nghiệp
PG_DATABASE_DOANH_NGHIEP="hutech_quanhedoanhnghiep"
PG_USER_DOANH_NGHIEP="postgres"
PG_PASSWORD_DOANH_NGHIEP="eru_1309_38190"
PG_HOST_DOANH_NGHIEP="103.63.115.22"
PG_PORT_DOANH_NGHIEP=5432
PG_MAX_CONNECTION_DOANH_NGHIEP=100
PG_MIN_CONNECTION_DOANH_NGHIEP=1
PG_IDLE_TIMEOUT_DOANH_NGHIEP=1000
PG_APP_NAME_DOANH_NGHIEP="website-doanh-nghiep"


MSSQL_DATABASE="hutech_erp_system"
MSSQL_USER="codehutech"
MSSQL_PASSWORD="hutech@!@#"
MSSQL_HOST="192.168.0.5"
MSSQL_MAX_CONNECTION=1000
MSSQL_MIN_CONNECTION=1
MSSQL_IDLE_TIMEOUT=2000

// RELEASE
MSSQL_DATABASE="hutech_erp_system"
MSSQL_USER="ioiort_doanhnghiep"
MSSQL_PASSWORD="123qwe@!@#QWE"
MSSQL_HOST="172.16.4.4"
MSSQL_MAX_CONNECTION=1000
MSSQL_MIN_CONNECTION=1
MSSQL_IDLE_TIMEOUT=2000


# app port, được khai báo bằng pm2 khi deploy
PORT=3200


# Web client domain
CLIENT_DOMAIN_TEST="http://localhost:3000"

# app name, được khai báo bằng pm2 khi deploy
APP_NAME="app_name"

# deploy path
DEPLOY_PATH="/some/folder/"
DEPLOY_PATH_RELEASE="/some/folder/"
DEPLOY_PATH_RELEASE_FHOUSE="/some/folder/"
DEPLOY_PATH_RELEASE_IEDUNET="/some/folder/"

## chạy bằng lệnh npx run start

# P_TRUNG_TAM_IT
## npm install

## chạy bằng lệnh npx run dev