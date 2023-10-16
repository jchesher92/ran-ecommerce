import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { create } from '../actions/customActions'

function CustomShopScreen() {
  const [numOfStrings, setNumOfStrings ] = useState('')
  const [rlHanded, setRLHanded ] = useState('')
  const [scaleLength, setScaleLength ] = useState('')
  const [construction, setConstruction ] = useState('')
  const [bodyShape, setBodyShape ] = useState('')
  const [bodyMaterial, setBodyMaterial ] = useState('')
  const [topWoodOptions, setTopWoodOptions] = useState('')
  const [bodyBinding, setBodyBinding] = useState('')
  const [bindingMaterial, setBindingMaterial ] = useState('')
  const [finish, setFinish ] = useState('')
  const [headstockShape, setHeadstockShape] = useState('')
  const [headstock, setHeadstock] = useState('')
  const [headstockFinish, setHeadstockFinish ] = useState('')
  const [headstockBinding, sethHeadstockBinding ] = useState('')
  const [trussRodCover, setTrussRodCover ] = useState('')
  const [logo, setLogo ] = useState('')
  const [neckMaterial, setNeckMaterial ] = useState('')
  const [neckShape, setNeckShape ] = useState('')
  const [nutWidth6, setNutWidth6] = useState('')
  const [nutWidth7, setNutWidth7] = useState('')
  const [nutWidth8, setNutWidth8 ] = useState('')
  const [thicknessAt1stand12thFret, setThicknessAt1stand12thFret ] = useState('')
  const [neckFinish, setNeckFinish ] = useState('')
  // const [fingerboardMaterial, setFingerboardMaterial ] = useState('')
  // const [fingerboardBinding, setFingerboardBinding] = useState('')
  // const [numOfFrets, setNumOfFrets] = useState('')
  // const [fretSize, setFretSize ] = useState('')
  // const [fingerboardRadius, setFingerboardRadius ] = useState('')
  // const [inlays, setInlays] = useState('')
  // const [customInlays, setCustomInlays] = useState('')
  // const [sideInlays, setSideInlays ] = useState('')
  // const [nut, setNut ] = useState('')
  // const [hardwareColour, setHardwareColour ] = useState('')
  // const [bridgeSystem6, setBridgeSystem6 ] = useState('')
  // const [bridgeSystem7, setBridgeSystem7] = useState('')
  // const [bridgeSystem8, setBridgeSystem8] = useState('')
  // const [tuningMachines, setTuningMachines] = useState('')
  // const [straplocks, setStraplocks ] = useState('')
  // const [neckPickup, setNeckPickup ] = useState('')
  // const [middlePickup, setMiddlePickup] = useState('')
  // const [bridgePickup, setBridgePickup] = useState('')
  // const [pickupRings, setPickupRings ] = useState('')
  // const [controlKnobs, setControlKnobs ] = useState('')
  // const [pickupSelector, setPickupSelector ] = useState('')
  // const [otherControls, setOtherControls ] = useState('')
  // const [flightCase, setFlightCase] = useState('')
  // const [additionalInstructions, setAdditionalInstructions] = useState('')

  const [message, setMessage] = useState('')

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const customGuitar = useSelector(state => state.customGuitar)
  const { error, loading, customInfo } = customGuitar
  
  useEffect(() => {
    if (customInfo) {
      navigate(redirect)
    }
  }, [navigate, customInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()

    if (numOfStrings === 0){
      setMessage('Please fill out all fields')
    } else {
      dispatch(create(numOfStrings, 
        rlHanded, 
        scaleLength,
        construction,
        bodyShape,
        bodyMaterial,
        topWoodOptions,
        bodyBinding,
        bindingMaterial,
        finish,
        headstockShape,
        headstock,
        headstockFinish,
        headstockBinding,
        trussRodCover,
        logo,
        neckMaterial,
        neckShape,
        nutWidth6,
        nutWidth7,
        nutWidth8,
        thicknessAt1stand12thFret,
        neckFinish
        // fingerboardMaterial,
        // fingerboardBinding,
        // numOfFrets,
        // fretSize,
        // fingerboardRadius,
        // inlays,
        // customInlays,
        // sideInlays,
        // nut,
        // hardwareColour,
        // bridgeSystem6,
        // bridgeSystem7,
        // bridgeSystem8,
        // tuningMachines,
        // straplocks,
        // neckPickup,
        // middlePickup,
        // bridgePickup,
        // pickupRings,
        // controlKnobs,
        // pickupSelector,
        // otherControls,
        // flightCase,
        // additionalInstructions
      ))
    }
  }

  return (
    <FormContainer>
      <h1>Custom Guitar Quote Form</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>

        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='numOfStrings'>
            <Row>
              <Form.Label><strong>Number of Strings</strong></Form.Label>
            </Row>
            
            <Form.Check
              inline
              type={type}
              label='6-string'
              name='spec1'
              value='6-string'
              id={`inline-${type}-1`}
              onChange={(spec) => setNumOfStrings(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='7-string'
              name='spec1'
              value='7-string'
              id={`inline-${type}-2`}
              onChange={(spec) => setNumOfStrings(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='8-string'
              name='spec1'
              value='8-string'
              id={`inline-${type}-3`}
              onChange={(spec) => setNumOfStrings(spec.target.value)}
            />
          </Form.Group>
        ))}

        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='rlHanded'>
            <Row>
              <Form.Label><strong>Left or Right Handed</strong></Form.Label>
            </Row>
            
            <Form.Check
              inline
              type={type}
              label='Left'
              name='spec2'
              value='Left'
              onChange={(spec) => setRLHanded(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='Right'
              name='spec2'
              value='Right'
              onChange={(spec) => setRLHanded(spec.target.value)}
            />
          </Form.Group>
        ))}

        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='scaleLength'>
            <Row>
              <Form.Label><strong>Scale Length</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='24.75"'
              name='spec3'
              value='24.75"'
              onChange={(spec) => setScaleLength(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='25"'
              name='spec3'
              value='25"'
              onChange={(spec) => setScaleLength(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='25.5"'
              name='spec3'
              value='25.5"'
              onChange={(spec) => setScaleLength(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='26"'
              name='spec3'
              value='26"'
              onChange={(spec) => setScaleLength(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='26.5"'
              name='spec3'
              value='26.5"'
              onChange={(spec) => setScaleLength(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='27"'
              name='spec3'
              value='27"'
              onChange={(spec) => setScaleLength(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='28"'
              name='spec3'
              value='28"'
              onChange={(spec) => setScaleLength(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='30"'
              name='spec3'
              value='30"'
              onChange={(spec) => setScaleLength(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='other'
              name='spec3'
              value='other'
              onChange={(spec) => setScaleLength(spec.target.value)}
            />
          </Form.Group>
        ))}

        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='construction'>
            <Row>
              <Form.Label><strong>Construction</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='Neck thru body'
              name='spec4'
              value='Neck thru body'
              onChange={(spec) => setConstruction(spec.target.value)}
            />
            <Form.Check
              inline
              type={type}
              label='Ran AANJ w/NTB style heel'
              name='spec4'
              value='Ran AANJ w/NTB style heel'
              onChange={(spec) => setConstruction(spec.target.value)}
            />
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='bodyShape'>
            <Row>
              <Form.Label><strong>Body Shape</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='Crusher'
              name='spec5'
              value='Crusher'
              onChange={(spec) => setBodyShape(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Cruiser'
              name='spec5'
              value='Cruiser'
              onChange={(spec) => setBodyShape(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Invader'
              name='spec5'
              value='Invader'
              onChange={(spec) => setBodyShape(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Demon'
              name='spec5'
              value='Demon'
              onChange={(spec) => setBodyShape(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Thor'
              name='spec5'
              value='Thor'
              onChange={(spec) => setBodyShape(spec.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='bodyMaterial'>
            <Row>
              <Form.Label><strong>Body Material</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='Alder'
              name='spec6'
              value='Alder'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Basswood'
              name='spec6'
              value='Basswood'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Plain Maple'
              name='spec6'
              value='Plain Maple'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Mahogany'
              name='spec6'
              value='Mahogany'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Swamp Ash'
              name='spec6'
              value='Swamp Ash'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Walnut'
              name='spec6'
              value='Walnut'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Other'
              name='spec6'
              value='Other'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='topWoodOptions'>
            <Row>
              <Form.Label><strong>Top Wood Options</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='None'
              name='spec7'
              value='None'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Flat'
              name='spec7'
              value='Flat'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Carved'
              name='spec7'
              value='Carved'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Other'
              name='spec7'
              value='Other'
              onChange={(spec) => setBodyMaterial(spec.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='bodyBinding'>
            <Row>
              <Form.Label><strong>Body Binding</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='None'
              name='spec8'
              value='None'
              onChange={(e) => setBodyBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Top'
              name='spec8'
              value='Top'
              onChange={(e) => setBodyBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Back'
              name='spec8'
              value='Back'
              onChange={(e) => setBodyBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Top & Back'
              name='spec8'
              value='Top & Back'
              onChange={(e) => setBodyBinding(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='bindingMaterial'>
            <Row>
              <Form.Label><strong>Binding Material</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='N/A'
              name='spec9'
              value='N/A'
              onChange={(e) => setBindingMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='White Plastic'
              name='spec9'
              value='White Plastic'
              onChange={(e) => setBindingMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Cream Plastic'
              name='spec9'
              value='Cream Plastic'
              onChange={(e) => setBindingMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='White Mother of Pearl Jeweled'
              name='spec9'
              value='White Mother of Pearl Jeweled'
              onChange={(e) => setBindingMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Natural'
              name='spec9'
              value='Natural'
              onChange={(e) => setBindingMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Black Plastic'
              name='spec9'
              value='Black Plastic'
              onChange={(e) => setBindingMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Ivoroid Plastic'
              name='spec9'
              value='Ivoroid Plastic'
              onChange={(e) => setBindingMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Abalone Jeweled'
              name='spec9'
              value='Abalone Jeweled'
              onChange={(e) => setBindingMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Other'
              name='spec9'
              value='Other'
              onChange={(e) => setBindingMaterial(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='finish'>
            <Row>
              <Form.Label><strong>Body Finish</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='Solid Gloss'
              name='spec10'
              value='Solid Gloss'
              onChange={(e) => setFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Solid Gloss Metallic'
              name='spec10'
              value='Solid Gloss Metallic'
              onChange={(e) => setFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='See-thru Gloss'
              name='spec10'
              value='See-thru Gloss'
              onChange={(e) => setFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='See-thru Satin'
              name='spec10'
              value='See-thru Satin'
              onChange={(e) => setFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Solid Satin'
              name='spec10'
              value='Solid Satin'
              onChange={(e) => setFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Natural Gloss'
              name='spec10'
              value='Natural Gloss'
              onChange={(e) => setFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Natural Satin'
              name='spec10'
              value='Natural Satin'
              onChange={(e) => setFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Hand-rubbed Oil'
              name='spec10'
              value='Hand-rubbed Oil'
              onChange={(e) => setFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Other'
              name='spec10'
              value='Other'
              onChange={(e) => setFinish(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='headstockShape'>
            <Row>
              <Form.Label><strong>Headstock Shape</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='Crusher'
              name='spec11'
              value='Crusher'
              onChange={(e) => setHeadstockShape(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Cruiser'
              name='spec11'
              value='Cruiser'
              onChange={(e) => setHeadstockShape(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Invader'
              name='spec11'
              value='Invader'
              onChange={(e) => setHeadstockShape(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Invader2'
              name='spec11'
              value='Invader2'
              onChange={(e) => setHeadstockShape(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Demon'
              name='spec11'
              value='Demon'
              onChange={(e) => setHeadstockShape(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Thor'
              name='spec11'
              value='Thor'
              onChange={(e) => setHeadstockShape(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Headless'
              name='spec11'
              value='Headless'
              onChange={(e) => setHeadstockShape(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='headstock'>
            <Row>
              <Form.Label><strong>Headstock</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='Regular'
              name='spec12'
              value='Regular'
              onChange={(e) => setHeadstock(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Reversed'
              name='spec12'
              value='Reversed'
              onChange={(e) => setHeadstock(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='headstockFinish'>
            <Row>
              <Form.Label><strong>Headstock Finish</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='Match Body Finish'
              name='spec13'
              value='Match Body Finish'
              onChange={(e) => setHeadstockFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Black'
              name='spec13'
              value='Black'
              onChange={(e) => setHeadstockFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Natural'
              name='spec13'
              value='Natural'
              onChange={(e) => setHeadstockFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Other'
              name='spec13'
              value='Other'
              onChange={(e) => setHeadstockFinish(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='None'
              name='spec13'
              value='None'
              onChange={(e) => setHeadstockFinish(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='headstockBinding'>
            <Row>
              <Form.Label><strong>Headstock Binding</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='None'
              name='spec14'
              value='None'
              onChange={(e) => sethHeadstockBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='White Plastic'
              name='spec14'
              value='White Plastic'
              onChange={(e) => sethHeadstockBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Cream Plastic'
              name='spec14'
              value='Cream Plastic'
              onChange={(e) => sethHeadstockBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='White Mother of Pearl Jeweled'
              name='spec14'
              value='White Mother of Pearl Jeweled'
              onChange={(e) => sethHeadstockBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Other'
              name='spec14'
              value='Other'
              onChange={(e) => sethHeadstockBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Black Plastic'
              name='spec14'
              value='Black Plastic'
              onChange={(e) => sethHeadstockBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Ivoroid Plastic'
              name='spec14'
              value='Ivoroid Plastic'
              onChange={(e) => sethHeadstockBinding(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Abalone Jeweled'
              name='spec14'
              value='Abalone Jeweled'
              onChange={(e) => sethHeadstockBinding(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='trussRodCover'>
            <Row>
              <Form.Label><strong>Truss Rod Cover</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='Plastic (b/w/b)'
              name='spec15'
              value='Plastic (b/w/b)'
              onChange={(e) => setTrussRodCover(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Wooden'
              name='spec15'
              value='Wooden'
              onChange={(e) => setTrussRodCover(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Other'
              name='spec15'
              value='Other'
              onChange={(e) => setTrussRodCover(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='None'
              name='spec15'
              value='None'
              onChange={(e) => setTrussRodCover(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='logo'>
            <Row>
              <Form.Label><strong>Logo</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='White Mother of Pearl'
              name='spec16'
              value='White Mother of Pearl'
              onChange={(e) => setLogo(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Abalone Jeweled'
              name='spec16'
              value='Abalone Jeweled'
              onChange={(e) => setLogo(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Logo + Signature'
              name='spec16'
              value='Logo + Signature'
              onChange={(e) => setLogo(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Silkscreen Ran Custom Made'
              name='spec16'
              value='Silkscreen Ran Custom Made'
              onChange={(e) => setLogo(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Silkscreen Ran Guitars Custom Made'
              name='spec16'
              value='Silkscreen Ran Guitars Custom Made'
              onChange={(e) => setLogo(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='neckMaterial'>
            <Row>
              <Form.Label><strong>Neck Material</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='3P Maple'
              name='spec17'
              value='3P Maple'
              onChange={(e) => setNeckMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='3P Mahogany'
              name='spec17'
              value='3P Mahogany'
              onChange={(e) => setNeckMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='3P 3A Flamed Maple'
              name='spec17'
              value='3P 3A Flamed Maple'
              onChange={(e) => setNeckMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='5P Maple/Mahogany'
              name='spec17'
              value='5P Maple/Mahogany'
              onChange={(e) => setNeckMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='5P Mahogany/Maple'
              name='spec17'
              value='5P Mahogany/Maple'
              onChange={(e) => setNeckMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Ovangkol'
              name='spec17'
              value='Ovangkol'
              onChange={(e) => setNeckMaterial(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='Other'
              name='spec17'
              value='Other'
              onChange={(e) => setNeckMaterial(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='neckShape'>
            <Row>
              <Form.Label><strong>Neck Shape</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='RAN-shape'
              name='spec18'
              value='RAN-shape'
              onChange={(e) => setNeckShape(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='nutWidth6'>
            <Row>
              <Form.Label><strong>Nut Width: 6-string</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='1 5/8" (42mm)'
              name='spec19'
              value='1 5/8" (42mm)'
              onChange={(e) => setNutWidth6(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        

        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='nutWidth7'>
            <Row>
              <Form.Label><strong>Nut Width: 7-string</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='N/A'
              name='spec20'
              value='N/A'
              onChange={(e) => setNutWidth7(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='1 7/8" (48mm), 7-string'
              name='spec20'
              value='1 7/8" (48mm), 7-string'
              onChange={(e) => setNutWidth7(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}

        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='nutWidth8'>
            <Row>
              <Form.Label><strong>Nut Width: 8-string</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='N/A'
              name='spec21'
              value='N/A'
              onChange={(e) => setNutWidth8(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='2 5/32" (55mm), 8-string'
              name='spec21'
              value='2 5/32" (55mm), 8-string'
              onChange={(e) => setNutWidth8(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}

        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='thicknessAt1stand12thFret'>
            <Row>
              <Form.Label><strong>Thickness at 1st and 12th Fret</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='19-21mm (recommended for 6/7-string)'
              name='spec22'
              value='19-21mm (recommended for 6/7-string)'
              onChange={(e) => setThicknessAt1stand12thFret(e.target.value)}
            >
            </Form.Check>
            <Form.Check
              inline
              type={type}
              label='20-22mm (recommended for 8-string)'
              name='spec22'
              value='20-22mm (recommended for 8-string)'
              onChange={(e) => setThicknessAt1stand12thFret(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        
        {['radio'].map((type) => (
          <Form.Group className='pb-4' key={`inline-${type}`} controlId='neckFinish'>
            <Row>
              <Form.Label><strong>Neck Finish</strong></Form.Label>
            </Row>
            <Form.Check
              inline
              type={type}
              label='Match Body Finish'
              name='spec23'
              value='Match Body Finish'
              onChange={(e) => setNeckFinish(e.target.value)}
            >
            </Form.Check>
          </Form.Group>
        ))}
        

        {/* <Form.Group controlId='fingerboardMaterial'>
          <Form.Label>Fingerboard Material</Form.Label>
          <Form.Control
            required
            type='fingerboardMaterial'
            placeholder='Enter fingerboard material'
            value={fingerboardMaterial}
            onChange={(e) => setFingerboardMaterial(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='fingerboardBinding'>
          <Form.Label>fingerboardBinding</Form.Label>
          <Form.Control
            required
            type='fingerboardBinding'
            placeholder='Enter fingerboard binding'
            value={fingerboardBinding}
            onChange={(e) => setFingerboardBinding(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='numOfFrets'>
          <Form.Label>Number of Frets</Form.Label>
          <Form.Control
            required
            type='numOfFrets'
            placeholder='Enter number of frets'
            value={numOfFrets}
            onChange={(e) => setNumOfFrets(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='fretSize'>
          <Form.Label>Fret Size</Form.Label>
          <Form.Control
            required
            type='fretSize'
            placeholder='Enter fret size'
            value={fretSize}
            onChange={(e) => setFretSize(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='fingerboardRadius'>
          <Form.Label>Fingerboard Radius</Form.Label>
          <Form.Control
            required
            type='fingerboardRadius'
            placeholder='Enter fingerboard radius'
            value={fingerboardRadius}
            onChange={(e) => setFingerboardRadius(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='inlays'>
          <Form.Label>Inlays</Form.Label>
          <Form.Control
            required
            type='inlays'
            placeholder='Enter inlays'
            value={inlays}
            onChange={(e) => setInlays(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='customInlays'>
          <Form.Label>Custom Inlays</Form.Label>
          <Form.Control
            required
            type='customInlays'
            placeholder='Enter custom inlays'
            value={customInlays}
            onChange={(e) => setCustomInlays(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='sideInlays'>
          <Form.Label>Side Inlays</Form.Label>
          <Form.Control
            required
            type='sideInlays'
            placeholder='Enter side inlays'
            value={sideInlays}
            onChange={(e) => setSideInlays(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='nut'>
          <Form.Label>Nut</Form.Label>
          <Form.Control
            required
            type='nut'
            placeholder='Enter nut'
            value={nut}
            onChange={(e) => setNut(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='hardwareColour'>
          <Form.Label>Hardware Colour</Form.Label>
          <Form.Control
            required
            type='hardwareColour'
            placeholder='Enter hardware colour'
            value={hardwareColour}
            onChange={(e) => setHardwareColour(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='bridgeSystem6'>
          <Form.Label>Bride System: 6-string</Form.Label>
          <Form.Control
            required
            type='bridgeSystem6'
            placeholder='Enter bridge system'
            value={bridgeSystem6}
            onChange={(e) => setBridgeSystem6(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='bridgeSystem7'>
          <Form.Label>Bride System: 7-string</Form.Label>
          <Form.Control
            required
            type='bridgeSystem7'
            placeholder='Enter bridge system'
            value={bridgeSystem7}
            onChange={(e) => setBridgeSystem7(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='bridgeSystem8'>
          <Form.Label>Bride System: 8-string</Form.Label>
          <Form.Control
            required
            type='bridgeSystem8'
            placeholder='Enter bridge system'
            value={bridgeSystem8}
            onChange={(e) => setBridgeSystem8(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='tuningMachines'>
          <Form.Label>Tuning Machines</Form.Label>
          <Form.Control
            required
            type='tuningMachines'
            placeholder='Enter tuning machines'
            value={tuningMachines}
            onChange={(e) => setTuningMachines(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='straplocks'>
          <Form.Label>Strap Locks</Form.Label>
          <Form.Control
            required
            type='straplocks'
            placeholder='Enter strap locks'
            value={straplocks}
            onChange={(e) => setStraplocks(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='neckPickup'>
          <Form.Label>Neck Pickup</Form.Label>
          <Form.Control
            required
            type='neckPickup'
            placeholder='Enter neck pickup'
            value={neckPickup}
            onChange={(e) => setNeckPickup(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='middlePickup'>
          <Form.Label>Middle Pickup</Form.Label>
          <Form.Control
            required
            type='middlePickup'
            placeholder='Enter middle pickup'
            value={middlePickup}
            onChange={(e) => setMiddlePickup(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='bridgePickup'>
          <Form.Label>Bridge Pickup</Form.Label>
          <Form.Control
            required
            type='bridgePickup'
            placeholder='Enter bridge pickup'
            value={bridgePickup}
            onChange={(e) => setBridgePickup(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='pickupRings'>
          <Form.Label>Pickup Rings</Form.Label>
          <Form.Control
            required
            type='pickupRings'
            placeholder='Enter pickup rings'
            value={pickupRings}
            onChange={(e) => setPickupRings(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='controlKnobs'>
          <Form.Label>Control Knobs</Form.Label>
          <Form.Control
            required
            type='controlKnobs'
            placeholder='Enter control knobs'
            value={controlKnobs}
            onChange={(e) => setControlKnobs(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='pickupSelector'>
          <Form.Label>Pickup Selector</Form.Label>
          <Form.Control
            required
            type='pickupSelector'
            placeholder='Enter pickup selector'
            value={pickupSelector}
            onChange={(e) => setPickupSelector(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='otherControls'>
          <Form.Label>Other Controls</Form.Label>
          <Form.Control
            required
            type='otherControls'
            placeholder='Enter other controls'
            value={otherControls}
            onChange={(e) => setOtherControls(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='flightCase'>
          <Form.Label>Flight Case</Form.Label>
          <Form.Control
            required
            type='flightCase'
            placeholder='Enter flight case'
            value={flightCase}
            onChange={(e) => setFlightCase(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='additionalInstructions'>
          <Form.Label>Additional Instructions</Form.Label>
          <Form.Control
            required
            type='additionalInstructions'
            placeholder='Additional Instructions'
            value={additionalInstructions}
            onChange={(e) => setAdditionalInstructions(e.target.value)}
          >
          </Form.Control>
        </Form.Group> */}

        <Button type='submit' variant='primary'>
          Submit
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account? <Link 
            to={redirect ? `/login?redirect=${redirect}` : '/login'}>
          Sign In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default CustomShopScreen
