import { Button, TextField, Typography } from "@mui/material"
import React, { ChangeEvent, FunctionComponent, useState } from "react"
import ReactStars from "react-rating-stars-component"

interface RatingProps {}

const Rating: FunctionComponent<RatingProps> = () => {
  const [user, setUser] = useState("")
  const [essayRating, setEssayRating] = useState("")
  const [siteRating, setSiteRating] = useState("")

  const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value)
  }
  const ratingEssayChanged = (newRatingEssay: string) => {
    setEssayRating(newRatingEssay)
  }

  const ratingSiteChanged = (newRatingEssay: string) => {
    setSiteRating(newRatingEssay)
  }

  const handleReview = () => {
    // You have to just all the trust pilot api to submit the review
    // Example Api is https://api.trustpilot.com/v1/exmaple/exampleID/
    // Please make validation before sending data to the api.
  }
  return (
    <React.Fragment>
      <TextField
        fullWidth
        type="text"
        sx={{ m: "2px" }}
        variant="outlined"
        onChange={handleUser}
        value={user}
        placeholder="Write your name"
      />
      <Typography variant="h4" component="h1">
        Please rate for eassay
      </Typography>
      <ReactStars
        count={5}
        onChange={ratingEssayChanged}
        size={24}
        activeColor="green"
      />
      <Typography variant="h4" component="h1">
        Please rate for site
      </Typography>
      <ReactStars
        count={5}
        onChange={ratingSiteChanged}
        size={24}
        activeColor="green"
      />
      {essayRating == "5" && siteRating == "5" && (
        <Button onClick={handleReview}>
          Leave us a review on the TrustPilot
        </Button>
      )}
    </React.Fragment>
  )
}

export default Rating
