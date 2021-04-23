terraform{
    required_providers {
      heroku = {
          source= "heroku/heroku"
          version= "3.2.0"
      }
    }

}

provider "heroku"{
    email = var.email_address
    api_key = var.heroku_api_key
}

resource "heroku_app" "tp_cloud_app_prod" {
  name   = "tp-cloud-app"
  region = "us"
}

resource "heroku_build" "tp_cloud_app_prod" {
  app = heroku_app.tp_cloud_app_prod.id

  source = {
    path = "../app"
  }
}

output "web_url" {
  value = heroku_app.tp_cloud_app_prod.web_url 
}
