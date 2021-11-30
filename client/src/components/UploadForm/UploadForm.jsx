import "./UploadForm.scss";

const UploadForm = () => {
    <>
        <section className="upload">
            <div className="upload__wrapper">
                <form className="upload__form" onSubmit="">
                    <label htmlFor="breweryName">Brewery Name</label>
                        <input className={this.validateInput(this.state.breweryName)
                        ? "upload__input"
                        : "upload__input--error"}
                            type="text"
                            name="breweryName"
                            placeholder="Brewery Name"
                            ></input>

<input className={this.validateInput(this.state.beerName)
                        ? "upload__input"
                        : "upload__input--error"}
                            type="text"
                            name="beerName"
                            placeholder="Beer name"
                            ></input>
                   
                   <input className={this.validateInput(this.state.beerType)
                        ? "upload__input"
                        : "upload__input--error"}
                            type="text"
                            name="beerType"
                            placeholder="Beer type"
                            ></input>
                            
                </form>
            </div>
        </section>
    </>
}

export default UploadForm;