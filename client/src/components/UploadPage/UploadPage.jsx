const UploadPage = () => {
    <>
        <section className="upload">
            <div className="upload__wrapper">
                <form className="upload__form" onSubmit="">
                    <label htmlFor="username">Username</label>
                        <input className={this.validateInput(this.state.userName)
                        ? "upload__input"
                        : "upload__input--error"}
                            type="text"
                            name="userName"
                            placeholder="Username"
                            ></input>

<input className={this.validateInput(this.state.beerName)
                        ? "upload__input"
                        : "upload__input--error"}
                            type="text"
                            name="beerName"
                            placeholder="Beer naam"
                            ></input>
                   
                   <input className={this.validateInput(this.state.beerName)
                        ? "upload__input"
                        : "upload__input--error"}
                            type="text"
                            name="beerName"
                            placeholder="Beer naam"
                            ></input>
                            
                </form>
            </div>
        </section>
    </>
}

export default UploadPage;