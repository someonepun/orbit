import React from "react";
import { Illustration } from "@kiwicom/orbit-components";

export default {
  Example: () => <Illustration name="Accommodation" />,
  exampleKnobs: [
    {
      component: "Illustration",
      knobs: [
        {
          name: "name",
          type: "select",
          options: [
            "AppKiwi",
            "Accommodation",
            "AirHelp",
            "AirportTransport",
            "AirportTransportTaxi",
            "AirportShuttle",
            "Ambulance",
            "AppQRCode",
            "BaggageDrop",
            "Boarding",
            "BoardingPass",
            "BusinessTravel",
            "CabinBaggage",
            "Chatbot",
            "Cancelled",
            "CompassCollectPoints",
            "CompassDemoted",
            "CompassEmailAdventurer",
            "CompassEmailCaptain",
            "CompassEmailPromoted",
            "CompassEmailPromotedCaptain",
            "CompassEmailScout",
            "CompassPoints",
            "CompassTravelPlan",
            "CompassSaveOnBooking",
            "Damage",
            "DepartureBoard",
            "DepartureBoardBadge",
            "DepartureBoardLounge",
            "DesktopSearch",
            "EnjoyApp",
            "Error",
            "EVisa",
            "Error404",
            "FastTrack",
            "FareLock",
            "FareLockSuccess",
            "Feedback",
            "FlexibleDates",
            "FlightDisruptions",
            "Help",
            "Improve",
            "Insurance",
            "InviteAFriend",
            "GroundTransport404",
            "Login",
            "Lounge",
            "Mailbox",
            "Meal",
            "MobileApp",
            "Money",
            "MusicalInstruments",
            "NetVerify",
            "NoBookings",
            "NoFavoriteFlights",
            "Nomad",
            "NomadNeutral",
            "NoNotification",
            "NoResults",
            "Offline",
            "OnlineCheckIn",
            "OpenSearch",
            "Parking",
            "PassportUpdate",
            "Pets",
            "PlaceholderAirport",
            "PlaceholderDestination",
            "PlaceholderHotel",
            "PlaceholderTours",
            "PlaneAndMoney",
            "PriorityBoarding",
            "Rating",
            "ReferAFriend",
            "RentalCar",
            "Seating",
            "SpecialAssistance",
            "SportsEquipment",
            "Success",
            "Time",
            "TicketFlexi",
            "TimelineBoarding",
            "TimelineDropBaggage",
            "TimelineLeave",
            "TimelinePick",
            "Tours",
            "Train",
            "TransportBus",
            "TransportTaxi",
            "Wheelchair",
            "WomanWithPhone",
          ],
          defaultValue: "Accommodation",
        },
        {
          name: "size",
          type: "select",
          defaultValue: "medium",
          options: ["extraSmall", "small", "medium", "large", "display"],
        },
      ],
    },
  ],
};
