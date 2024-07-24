import React, { useState } from 'react'
import Chatbot from '../LiveChat/ChatBot'
import '../LiveChat/live-chat.css'
import './playground.css'
const Playground = () => {



    return (
        <div className='main-data-sources'>
            <div className='hdr_st_so'>
                <div>
                    <h2>Play Ground</h2>
                </div>
            </div>
            <div className='playground mn-box-select'>
                <div className='inr_dat_box'>
                    <div className='chat_bot_playground'>
                        <Chatbot />
                    </div>
                    <div className='playground_context'>
                        <h4>Test Azister with your knowledge</h4>
                        <p>Type a question or try following examples too see how Azister responds. Feel free, test questions do not count toward the Azister conversations limit.</p>
                        <a>
                            <button type="button" class=" btn btn-new btn-size-l btn-primary undefined"><span>Show other</span>
                            </button>
                        </a>

                        <div className="css-1dgwj5h e1l5a2a40">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="default"
                                className="css-1jraybv e11k6mr30"
                                style={{ minWidth: '24px', minHeight: '24px' }}
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
                            </svg>
                            <p className="css-17dr1mu eimqq0f0">
                                To enhance Azister response quality and efficiency, keep adding more knowledge.{' '}
                                <a href="/data-sources">Add more knowledge</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Playground
