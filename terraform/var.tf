variable "email_address" {
  description = "Email address to use for Heroku"
  type        = string
  sensitive   = true

}


variable "heroku_api_key" {
  description = "Your Heroku API key"
  type        = string
  sensitive   = true
}