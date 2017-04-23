package models

import play.api.libs.json.Json

case class City(id: Long, city: String, message: String,
                date: String, pictureUrl: String, prix: Int)

object City {
  implicit val formatter = Json.format[City]
}
