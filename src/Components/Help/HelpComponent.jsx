import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import FAQ from './FAQ';
import ContactForm from './ContactForm';

const HelpComponent = () => {
    return (
        <>
            <div className='home-table2 rounded-xl'>                
                <div className=''>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <h2 className="text-xl font-semibold">Back</h2>
                        </div>
                    </div>
                    <FAQ/>
                    <ContactForm/>
                </div>
            </div>
                
                
        </>
    )
}
export default HelpComponent



