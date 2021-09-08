import { useState } from 'react'
import './contact.scss'

const Contact = () => {
  const [openForm, setOpenForm] = useState(false)
  return (
    <div className="contact" id="contact">
      {!openForm &&<button
        className="anim-btn"
        onClick={() => {
          setOpenForm(true)
        }}
      >
        Parlez-moi!
      </button>}
      {!openForm &&  <h1>N'hesitez pas à me contacter</h1>}
      <div className="animation-form"></div>


      {openForm && (
        <div className="formulaire">
          <h2>bonjour</h2>
          <p>test</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus error natus ut quas laboriosam repudiandae accusantium
            assumenda labore tenetur, sint, alias maiores! Quam obcaecati
            eligendi porro temporibus neque, accusantium qui voluptatum?
            Molestias cumque soluta animi sit vitae quas, sed commodi neque ad
            magnam unde officiis dicta deserunt, quam provident eligendi
            blanditiis tempora ex in! Delectus pariatur, minima voluptatum sunt
            recusandae ipsam, natus doloribus neque qui, accusamus sapiente.
            Omnis, facere ea ipsum eligendi, hic totam obcaecati aspernatur
            magni molestiae enim vitae natus a aliquam. Sint autem, nobis
            expedita quae similique mollitia soluta, neque illo quos vel non
            temporibus quo, facilis accusamus corporis. Totam at illum
            voluptatibus labore perferendis est magnam pariatur temporibus
            aperiam iure numquam illo in laborum deleniti, atque ipsum. Maiores
            dolorem totam natus ad eligendi, sunt, officia optio exercitationem
            iure laboriosam tempore. Commodi incidunt, modi ipsa ex odit soluta
            aliquam animi itaque quis, tempora sint laboriosam aspernatur
            deleniti deserunt! Ex, libero provident porro, blanditiis earum, aut
            molestiae id ut exercitationem aliquid repudiandae atque odio sequi
            enim! A, cum cumque. Aliquam deserunt magni consectetur sapiente
            enim autem alias at optio, porro dolore inventore unde temporibus,
            aperiam eligendi animi reprehenderit velit. Eos, at pariatur? Animi,
            natus itaque. Consequatur laudantium quas vel!
          </p>
          <button
            className="cancel-btn"
            onClick={() => {
              setOpenForm(false)
            }}
          >
            Annuler
          </button>
        </div>
      )}
    </div>
  )
}

export default Contact
