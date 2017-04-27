name := """play-reactive-mongo-db"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

routesGenerator := InjectedRoutesGenerator

libraryDependencies ++= Seq(
//  "org.reactivemongo" %% "play2-reactivemongo" % "0.11.14"
"org.reactivemongo" %% "play2-reactivemongo" % "0.11.12"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"


scalacOptions in ThisBuild ++= Seq("-feature", "-language:postfixOps")
/* ================================= ng build ================================== */

val frontEndProjectName = "frontend"
val backEndProjectName = "backend"
val distDirectory = ".." + backEndProjectName + "public/dist"

// Starts: angularCLI build task
val frontendDirectory = baseDirectory {_ /".."/frontEndProjectName}

val ng = sys.props("os.name").toLowerCase match {
  case os if os.contains("win") => "cmd /c ng"
  case _ => "ng"
}

val params = sys.props("os.name").toLowerCase match {
  case os if os.contains("win") => " build --deploy-url /dist --output-path ..\\backend\\public\\dist --progress "
  case _ => " build --deploy-url /dist --output-path ../backend/public/dist --progress "
}

val ngBuild = taskKey[Unit]("ng build task.")
ngBuild := { Process( ng + params , frontendDirectory.value) ! }
(packageBin in Universal) <<= (packageBin in Universal) dependsOn ngBuild
// End