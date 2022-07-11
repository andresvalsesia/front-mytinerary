import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Accordion from '@mui/material/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import commentsActions from '../redux/actions/commentActions';
import itineraryActions from '../redux/actions/itineraryActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';
import Activity from './Activity';



export default function Itenerary({cityId,info}) {
    const [reload, setReload] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [inputText, setInputText] = useState("");
    const [modifi, setModifi] = useState();
    const dispatch = useDispatch();
    const matchMobile = useMediaQuery('(max-width:575px)');
    const matchTablet = useMediaQuery('(min-width: 576px) and (max-width: 991px)');
    const matchXlDesktop = useMediaQuery('(min-width: 992px)');

 
    useEffect(() => {

    
    dispatch(itineraryActions.getItinerariesByCity(cityId))
    // eslint-disable-next-line 

    }, [reload]) 



  console.log(info?.comments)
     
    async function cargarComentario(event) {

        const commentData = {
            place: info._id,
            comment: inputText,
        }

         await dispatch(commentsActions.addComment(commentData))
        setInputText("")
        document.querySelector("#nuevoComentario").textContent = ""
 
        setReload(!reload)
    }

    async function modificarComentario(event) {
        const commentData = {
            commentID: event.target.id,
            commentModify: modifi
        }



        await dispatch(commentsActions.modifiComment(commentData))
        setReload(!reload)

    }


    async function eliminarComentario(event) {
        await dispatch(commentsActions.deleteComment(event.target.id))
        setReload(!reload)
    }


    const handleLike = async (event) => {


        await dispatch(itineraryActions.likeDisLike(info._id))
        setReload(!reload)

    }

    if (isShown) {
        toast.warn("Please to give likes to this itinerary you must be registered", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }


    let act = useSelector(store => store.activityReducer.activitis);
    let filter = act.filter(element => element.country._id == info._id);
    let user = useSelector(store => store.userReducer.user)  //user
    
   
    return (
        <>


             {matchXlDesktop &&

                <Box sx={{ width: '100%', height: '100%', marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center', backgroundColor: '#354259', borderRadius: '20px' }}>
                    <Typography sx={{ fontWeight: 'bold', paddingTop: '1.2rem' }} variant="h2" color="white">{info?.name}</Typography>
                    <img className="profile" src={info?.img} alt={info?.name} />
                    <Typography variant="h4" color="white" sx={{ marginTop: '0.7rem' }}>{info?.userName}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '0.5rem' }}>


                        <Box sx={{ display: 'flex', alignItems: 'center' }}>


                            {user ?
                                <> {info && info?.like.includes(user.id) ? <><Button onClick={handleLike}><ThumbUpIcon sx={{ fontSize: '40px', color: 'blue' }} /></Button><Typography variant="h4" color="white">{info?.like.length}</Typography> </>
                                    : <> <Button onClick={handleLike}><ThumbUpIcon sx={{ fontSize: '40px', color: 'white' }} /></Button><Typography variant="h4" color="white">{info?.like.length}</Typography></>

                                }
                                </>
                                :
                                <> <buttton className="btn-disabled" onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}

                                ><ThumbUpIcon sx={{ fontSize: '45px' }} /></buttton>
                                </>
                            }


                        </Box>
                        <Typography variant="h4" color="white">Price:  {info?.price}</Typography>
                        <Typography variant="h4" color="white">Duration: {info?.duration} hours</Typography>


                    </Box>
                    <Typography variant="h4" color="white">{info?.hastag}</Typography>

                    <Box>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Box sx={{ margin: '0 auto' }}>
                                    <button className="learn-more">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">View More</span>
                                    </button>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails sx={{ width: '100%' }}>
                                <Typography variant="h3" color="white" sx={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                    Activities
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>

                                    {

                                        filter.length > 0 ? filter[0].activity.map((element, index) => <Activity key={index} props={element} />)
                                            : <Box sx={{ width: '100%', height: '15vh', marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center', backgroundColor: '#354259', borderRadius: '20px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                                <Typography variant="h3" color="white">AT THE MOMENT THIS CITY DOES NOT HAVE ACTIVITIES</Typography>

                                            </Box>
                                    }

                                </Box>

                                <Typography variant="h3" color="white" sx={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
                                    Comments
                                </Typography>




                                <div className="accordion" id={info?.name}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header " id={"heading" + info?.name}>
                                            <button className="accordion-button collapsed acordion " type="button" data-bs-toggle="collapse" data-bs-target={"#" + info?.name.replace(/ /g, "").slice(0, 5)} aria-expanded="false" aria-controls={info?.name.replace(/ /g, "").slice(0, 5)}>
                                                COMMENTS ({info?.comments.length})
                                                <span className="material-icons ml-auto arrow collapsed " data-bs-toggle="collapse" aria-controls={info?.name.replace(/ /g, "").slice(0, 5)} data-bs-target={"#" + info?.name.replace(/ /g, "").slice(0, 5)}>

                                                </span>
                                            </button>
                                        </h2>
                                        <div id={info?.name.replace(/ /g, "").slice(0, 5)} className="accordion-collapse collapse " aria-labelledby={"heading" + info?.name} data-bs-parent={"#" + info?.name}>
                                            <div className="accordion-body body-accordion">


                                                {info?.comments.map(comment =>
                                                    <>
                                                        {comment.userID?._id !== user?.id ?
                                                            <div className="card cardComments " key={comment._id}>

                                                                <div className="card-header cardHeader">
                                                                 <div>  
                                                                 <Avatar sx={{outline:'1px solid black'}} alt="Remy Sharp" src={comment.userID?.photoUser} />
                                                                 <p>{comment.userID.name} {comment.userID.surname}</p> <p>{new Date(comment.date).toUTCString()}</p>
                                                                 </div> 
                                                                </div>
                                                                <div className="card-body">
                                                                    <p className="card-text cardText">{comment.comment}</p>
                                                                </div>
                                                            </div> :

                                                            <div className="card cardComments">
                                                                <div className="card-header cardHeader">
                                                                    <Avatar sx={{outline:'1px solid black'}} alt="Remy Sharp" src={comment.userID?.photoUser} />
                                                                    <p>{comment.userID.name} {comment.userID.surname}</p> <p>{new Date(comment.date).toUTCString()}</p>
                                                                    <button id={comment._id} onClick={modificarComentario} className="btn btn-primary btnComments"><CreateIcon sx={{fontSize:'30px'}} /> Modify</button>
                                                                    <button id={comment._id} onClick={eliminarComentario} className="btn btn-primary btnComments"><DeleteOutlineIcon sx={{fontSize:'30px'}} /> Remove</button>
                                                                </div>
                                                                <div className="card-body ">

                                                                    <div type="text" className="card-text textComments cardText" onInput={(event) => setModifi(event.currentTarget.textContent)} contentEditable >{comment.comment}</div>

                                                                </div>
                                                            </div>

                                                        }
                                                    </>
                                                )}

                                                {user ?
                                                    <div className="card cardComments">
                                                        <div className="card-header cardHeaderNew">
                                                            
                                                                LEAVE US YOUR COMMENT
                                                        </div>
                                                        <div className="card-body ">
                                                            <div id="nuevoComentario" placeholder='Write your comment here...' onInput={(event) => setInputText(event.currentTarget.textContent)} contentEditable className="card-text textComments" ></div>
                                                            <button onClick={cargarComentario} className="btn btn-primary btnComments">Send</button>
                                                        </div>
                                                    </div> :
                                                    <h1>register to leave us your comment</h1>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>






                            </AccordionDetails>
                        </Accordion>
                    </Box>

                </Box >
            }

            {
                matchTablet && <Box sx={{ width: '100%', height: '100%', marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center', backgroundColor: '#354259', borderRadius: '20px' }}>
                    <Typography sx={{ fontWeight: 'bold', paddingTop: '1.2rem' }} variant="h4" color="white">{info?.name}</Typography>
                    <img className="profile" src={info?.img} alt={info?.name} />
                    <Typography variant="h4" color="white" sx={{ marginTop: '0.7rem' }}>{info?.userName}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '0.5rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            {user ?
                                <> {info?.like.includes(user.id) ? <><Button id={info?._id} onClick={handleLike}><ThumbUpIcon sx={{ fontSize: '40px', color: 'blue' }} /></Button><Typography variant="h4" color="white">{info?.like.length}</Typography> </>
                                    : <> <Button id={info?._id} onClick={handleLike}><ThumbUpIcon sx={{ fontSize: '40px', color: 'white' }} /></Button><Typography variant="h4" color="white">{info?.like.length}</Typography></>

                                }
                                </>
                                :
                                <> <buttton className="btn-disabled" onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}

                                ><ThumbUpIcon sx={{ fontSize: '45px' }} /></buttton>
                                </>
                            }


                        </Box>
                        <Typography variant="h5" color="white">Price:  {info?.price}</Typography>
                        <Typography variant="h5" color="white" sx={{ marginTop: '0.5rem' }}>Duration: {info?.duration} hours</Typography>

                    </Box>
                    <Typography variant="h5" color="white" sx={{ marginTop: '0.5rem' }}>{info?.hastag}</Typography>

                    <Box>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Box sx={{ margin: '0 auto' }}>
                                    <button className="learn-more">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">View More</span>
                                    </button>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails sx={{ width: '100%' }}>
                                <Typography variant="h4" color="white" sx={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                    Activities
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                    {

                                        filter.length > 0 ? filter[0].activity.map((element, index) => <Activity key={index} props={element} />)
                                            : <Box sx={{ width: '100%', height: '15vh', marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center', backgroundColor: '#354259', borderRadius: '20px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                                <Typography variant="h3" color="white">AT THE MOMENT THIS CITY DOES NOT HAVE ACTIVITIES</Typography>

                                            </Box>


                                    }

                                </Box>

                                <Typography variant="h3" color="white" sx={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                                    Comments
                                </Typography>

                                <div className="accordion" id={info?.name}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header " id={"heading" + info?.name}>
                                            <button className="accordion-button collapsed acordion " type="button" data-bs-toggle="collapse" data-bs-target={"#" + info?.name.replace(/ /g, "").slice(0, 5)} aria-expanded="false" aria-controls={info?.name.replace(/ /g, "").slice(0, 5)}>
                                                COMMENTS ({info?.comments.length})
                                                <span className="material-icons ml-auto arrow collapsed " data-bs-toggle="collapse" aria-controls={info?.name.replace(/ /g, "").slice(0, 5)} data-bs-target={"#" + info?.name.replace(/ /g, "").slice(0, 5)}>

                                                </span>
                                            </button>
                                        </h2>
                                        <div id={info?.name.replace(/ /g, "").slice(0, 5)} className="accordion-collapse collapse " aria-labelledby={"heading" + info?.name} data-bs-parent={"#" + info?.name}>
                                            <div className="accordion-body body-accordion ">


                                                {info?.comments.map(comment =>
                                                    <>
                                                        {comment.userID?._id !== user?.id ?
                                                            <div className="card cardComments " key={comment._id}>

                                                                <div className="card-header cardHeader">
                                                                    <div>
                                                                    <Avatar sx={{outline:'1px solid black'}} alt="Remy Sharp" src={comment.userID?.photoUser} />
                                                                    <p>{comment.userID.name} {comment.userID.surname}</p> <p>{new Date(comment.date).toUTCString()}</p>
                                                                    </div>
                            
                                                                </div>
                                                                <div className="card-body">
                                                                    <p className="card-text cardText">{comment.comment}</p>
                                                                </div>
                                                            </div> :

                                                            <div className="card cardComments">
                                                                <div className="card-header cardHeader">
                                                                    <div>
                                                                    <Avatar sx={{outline:'1px solid black'}} alt="Remy Sharp" src={comment.userID?.photoUser} />
                                                                    <p>{comment.userID.name} {comment.userID.surname}</p> <p>{new Date(comment.date).toUTCString()}</p>
                                                                    </div>
                                                                    
                                                                    <button id={comment._id} onClick={modificarComentario} className="btn btn-primary btnComments"><CreateIcon sx={{fontSize:'35px'}} /></button>
                                                                    <button id={comment._id} onClick={eliminarComentario} className="btn btn-primary btnComments"><DeleteOutlineIcon sx={{fontSize:'35px'}} /> </button>
                                                                </div>
                                                                <div className="card-body ">

                                                                    <div type="text" className="card-text textComments cardText" onInput={(event) => setModifi(event.currentTarget.textContent)} contentEditable >{comment.comment}</div>

                                                                </div>
                                                            </div>

                                                        }
                                                    </>
                                                )}

                                                {user ?
                                                    <div className="card cardComments">
                                                        <div className="card-header cardHeaderNew">
                                                            
                                                            LEAVE US YOUR COMMENT
                                                        </div>
                                                        <div className="card-body ">
                                                            <div id="nuevoComentario" placeholder='Write your comment here...' onInput={(event) => setInputText(event.currentTarget.textContent)} contentEditable className="card-text textComments" ></div>
                                                            <button onClick={cargarComentario} className="btn btn-primary btnComments">Send</button>
                                                        </div>
                                                    </div> :
                                                    <h1>Make SignIn and leave us your comment</h1>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </AccordionDetails>
                        </Accordion>
                    </Box>

                </Box>
            }


            {
                matchMobile && <Box sx={{ width: '100%', height: '100%', marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center', backgroundColor: '#354259', borderRadius: '20px' }}>
                    <Typography sx={{ fontWeight: 'bold', paddingTop: '1.2rem' }} variant="h4" color="white">{info?.name}</Typography>
                    <img className="profile" src={info?.img} alt={info?.name} />
                    <Typography variant="h4" color="white" sx={{ marginTop: '0.7rem' }}>{info?.userName}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '0.5rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            {user ?
                                <> {info?.like.includes(user.id) ? <><Button id={info?._id} onClick={handleLike}><ThumbUpIcon sx={{ fontSize: '40px', color: 'blue' }} /></Button><Typography variant="h4" color="white">{info?.like.length}</Typography> </>
                                    : <> <Button id={info?._id} onClick={handleLike}><ThumbUpIcon sx={{ fontSize: '40px', color: 'white' }} /></Button><Typography variant="h4" color="white">{info?.like.length}</Typography></>

                                }
                                </>
                                :
                                <> <buttton className="btn-disabled" onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}

                                ><ThumbUpIcon sx={{ fontSize: '45px' }} /></buttton>
                                </>
                            }
                        </Box>
                        <Typography variant="h5" color="white">Price:  {info?.price}</Typography>
                        <Typography variant="h5" color="white" sx={{ marginTop: '0.5rem' }}>Duration: {info?.duration} hours</Typography>

                    </Box>
                    <Typography variant="h5" color="white" sx={{ marginTop: '0.5rem' }}>{info?.hastag}</Typography>

                    <Box>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Box sx={{ margin: '0 auto' }}>
                                    <button className="learn-more">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">View More</span>
                                    </button>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails sx={{ width: '100%' }}>
                                <Typography variant="h4" color="white" sx={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                    Activities
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                    {

                                        filter.length > 0 ? filter[0].activity.map((element, index) => <Activity key={index} props={element} />)
                                            : <Box sx={{ width: '100%', height: '15vh', marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center', backgroundColor: '#354259', borderRadius: '20px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                                <Typography variant="h3" color="white">AT THE MOMENT THIS CITY DOES NOT HAVE ACTIVITIES</Typography>

                                            </Box>

                                    }

                                </Box>

                                <Typography variant="h3" color="white" sx={{ marginTop: '2rem', marginBottom: '0.5rem' }}>
                                    Comments
                                </Typography>

                                <div className="accordion" id={info?.name}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header " id={"heading" + info?.name}>
                                            <button className="accordion-button collapsed acordion " type="button" data-bs-toggle="collapse" data-bs-target={"#" + info?.name.replace(/ /g, "").slice(0, 5)} aria-expanded="false" aria-controls={info?.name.replace(/ /g, "").slice(0, 5)}>
                                                COMMENTS ({info?.comments.length})
                                                <span className="material-icons ml-auto arrow collapsed " data-bs-toggle="collapse" aria-controls={info?.name.replace(/ /g, "").slice(0, 5)} data-bs-target={"#" + info?.name.replace(/ /g, "").slice(0, 5)}>

                                                </span>
                                            </button>
                                        </h2>
                                        <div id={info?.name.replace(/ /g, "").slice(0, 5)} className="accordion-collapse collapse " aria-labelledby={"heading" + info?.name} data-bs-parent={"#" + info?.name}>
                                            <div className="accordion-body body-accordion ">


                                                {info?.comments.map(comment =>
                                                    <>
                                                        {comment.userID?._id !== user?.id ?
                                                            <div className="card cardComments " key={comment._id}>

                                                                <div className="card-header cardHeader">

                                                                <div>
                                                                    <Avatar sx={{outline:'1px solid black'}} alt="Remy Sharp" src={comment.userID?.photoUser} />
                                                                    <p>{comment.userID.name} {comment.userID.surname}</p> <p>{new Date(comment.date).toUTCString()}</p>
                                                                </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <p className="card-text cardText">{comment.comment}</p>
                                                                </div>
                                                            </div> :

                                                            <div className="card cardComments">
                                                                <div className="card-header cardHeader">
                                                                <div>
                                                                    <Avatar sx={{outline:'1px solid black'}} alt="Remy Sharp" src={comment.userID?.photoUser} />
                                                                    <p>{comment.userID.name} {comment.userID.surname}</p> <p className="date-utc">{new Date(comment.date).toUTCString()}</p>
                                                                    </div>
                                                                <div>

                                                                    <button id={comment._id} onClick={modificarComentario} className="btn btn-primary btnComments"><CreateIcon sx={{fontSize:'35px'}} /></button>
                                                                    <button id={comment._id} onClick={eliminarComentario} className="btn btn-primary btnComments"><DeleteOutlineIcon sx={{fontSize:'35px'}} /> </button>

                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className="card-body ">

                                                                    <div type="text" className="card-text textComments cardText" onInput={(event) => setModifi(event.currentTarget.textContent)} contentEditable >{comment.comment}</div>

                                                                </div>
                                                            </div>

                                                        }
                                                    </>
                                                )}

                                                {user ?
                                                    <div className="card cardComments">
                                                        <div className="card-header cardHeaderNew">
                                                        LEAVE US YOUR COMMENT
                                                        </div>
                                                        <div className="card-body ">
                                                            <div id="nuevoComentario" placeholder='Write your comment here...' onInput={(event) => setInputText(event.currentTarget.textContent)} contentEditable className="card-text textComments" ></div>
                                                            <button onClick={cargarComentario} className="btn btn-primary btnComments">Send</button>
                                                        </div>
                                                    </div> :
                                                    <h1>Make singIn and leave us your comment</h1>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </AccordionDetails>
                        </Accordion>
                    </Box>

                </Box>
            }
 
        </>

    );
}

