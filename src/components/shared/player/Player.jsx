import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Link } from 'react-router-dom'

const Player = () => {
  return (
    <div className="bottom-0 fixed bg-base-300 glassEffect w-full p-3 grid lg:grid-cols-3 justify-between bg-opacity-50 items-center">
      <div className="hidden lg:flex lg:gap-2">
        <img
          src="https://i.ytimg.com/vi/gj5QG8Jv8XQ/sddefault.jpg"
          alt=""
          className="h-20 w-20 rounded-md"
        />
        <div>
          <h1 className="text-lg font-bold link-hover">
            <Link to={'/'}>AURORA - Runaway Use HeadPhone</Link>
          </h1>
          <Link className="font-semibold link-hover">AURORA</Link>
          <p>203243 Times Played</p>
        </div>
      </div>
      <H5AudioPlayer src="https://unum.ummn.nu/api/v1/download?sig=ShEjYjTH52mgnRTyXP%2FBqhvVU9FrfhMW%2FRSQQTWN%2Fs3hYBumA2VX1TNHi0ga6snINW0pbOAN2cA68OD1SZa%2BdD6cgLaA9rSfEcyKjKARtLk8z3i11NfYjBEI5cLEGCaYwhi9IH%2BGo6bRbm7jsVTCRKy3Z0K7i7MYnvN5%2BoS1Xq1GwmVNbCtX%2B5iiVEK68ufBpEjRvE4HvdwKeWs74%2FEHBmqXWwUqRE8x3jt%2BnakobcKEmC%2FQ71adBzOcuOZd4wG%2F27Axj%2BWz5SW%2BeZyKEJfCfRygZ%2FBDrVTkBR62uwEO6CLIoXAJsZdhpTca%2F5xabXGAz3c59bdS5ujcVwTDdrpOKw%3D%3D&v=v=6RMz9HoGnY0,6RMz9HoGnY0&_=0.18949661119233752"></H5AudioPlayer>
    </div>
  )
}

export default Player
