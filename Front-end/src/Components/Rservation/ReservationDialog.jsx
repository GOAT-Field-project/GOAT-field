import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ReservationDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Book Now
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book now</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2"></div>
                  <div class="w-full px-3 sm:w-1/2"></div>
                </div>
                <div class="mb-5">
                  <label
                    for="guest"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    How many players are you bringing?
                  </label>
                  <input
                    type="number"
                    name="guest"
                    id="guest"
                    placeholder="5"
                    min="0"
                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="date"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="time"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        id="time"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="mb-3 block text-base font-medium text-[#07074D]">
                    Are you coming to the event?
                  </label>
                  <div class="flex items-center space-x-6">
                    <div class="flex items-center">
                      <input
                        type="radio"
                        name="radio1"
                        id="radioButton1"
                        class="h-5 w-5"
                      />
                      <label
                        for="radioButton1"
                        class="pl-3 text-base font-medium text-[#07074D]"
                      >
                        Yes
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type="radio"
                        name="radio1"
                        id="radioButton2"
                        class="h-5 w-5"
                      />
                      <label
                        for="radioButton2"
                        class="pl-3 text-base font-medium text-[#07074D]"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
