package models

import play.api.libs.json.Json

case class City(city: String, message: String,
                date: String, pictureUrl: String, prix: Double)

object City {
  implicit val formatter = Json.format[City]
}
