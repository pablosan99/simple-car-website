import React, { createContext, ReactNode, useContext } from 'react';
import { ConfiguratorType } from '../types/Types';

type Props = {
  children: ReactNode
}

type CarConfiguratorContextType = {
  configurator: ConfiguratorType;
}

const defaultConfiguratorContext: CarConfiguratorContextType = {
  configurator: {
    models: [
      {
        code: "car-smart",
        categories: ["CombustionEngine", "City"],
        engineTypes: ["1.0 MT", "1.0 AT", "1.4 MT", "1.5 AT"],
        name: "Car Smart",
        colors: ["Black", "Yellow"],
        versions: ["S", "M", "L"],
        equipment: {
          S: ["Heated seats", "Leather seats"],
          M: ["Heated seats", "Leather seats", "Navigation", "Parking assist", ],
          L: ["Leather seats", "Navigation", "Parking assist", "Rear view camera", "Seat heating"],
          Business: [],
          GTLine: []
        }
      },
      {
        code: "car-medium",
        categories: ["CombustionEngine", "ElectricEngine", "City"],
        engineTypes: ["1.0 MT", "1.0 AT", "1.4 MT", "1.5 AT", "39kWh", "64kWh"],
        name: "Car Medium",
        colors: ["LightBlue", "Pink"],
        versions: ["S", "M", "L", "Business"],
        equipment: {
          S: ["Heated seats", "Leather seats"],
          M: ["Heated seats", "Leather seats", "Navigation", "Parking assist", ],
          L: ["Heated seats", "Leather seats", "Navigation", "Parking assist", "Rear view camera", "Seat heating"],
          Business: ["Seat memory"],
          GTLine: []
        }
      },
      {
        code: "car-evolution",
        categories: ["Hybrid", "ElectricEngine"],
        engineTypes: ["39kWh", "64kWh", "1.6 AT Plug-in"],
        name: "Car Evolution",
        colors: ["LightBlue", "Pink", "Yellow"],
        versions: ["S", "M", "L", "Business"],
        equipment: {
          S: ["Heated seats", "Leather seats"],
          M: ["Heated seats", "Leather seats", "Navigation", "Parking assist", ],
          L: ["Heated seats", "Leather seats", "Navigation", "Parking assist", "Rear view camera", "Seat heating" ],
          Business: [],
          GTLine: []
        }
      },
      {
        code: "car-evolution-2",
        categories: ["CombustionEngine"],
        engineTypes: ["1.5 AT", "2.0 AT"],
        name: "Car Evolution 2",
        colors: ["LightBlue", "Pink", "Yellow"],
        versions: ["S", "M", "L", "Business"],
        equipment: {
          S: ["Heated seats", "Leather seats"],
          M: ["Heated seats", "Leather seats", "Navigation", "Parking assist", ],
          L: ["Heated seats", "Leather seats", "Navigation", "Parking assist", "Rear view camera", "Seat heating"],
          Business: [],
          GTLine: []
        }
      },
      {
        code: "car-stars",
        categories: ["CombustionEngine"],
        engineTypes: ["1.4 MT", "1.5 AT", "1.6 AT"],
        name: "Car Stars",
        colors: ["LightBlue", "Pink", "Yellow", "Silver"],
        versions: ["S", "M", "L", "Business"],
        equipment: {
          S: ["Heated seats", "Leather seats"],
          M: ["Heated seats", "Leather seats", "Navigation", "Parking assist", ],
          L: ["Heated seats", "Leather seats", "Navigation", "Parking assist", "Rear view camera", "Seat heating"],
          Business: [],
          GTLine: []
        }
      },
      {
        code: "car-max",
        categories: ["CombustionEngine", "GT"],
        engineTypes: ["1.4 MT", "1.5 AT", "1.6 AT", "2.0 AT"],
        name: "Car Max",
        colors: ["LightBlue", "Pink", "Yellow", "Silver"],
        versions: ["S", "M", "L", "Business"],
        equipment: {
          S: ["Heated seats", "Leather seats"],
          M: ["Heated seats", "Leather seats", "Navigation", "Parking assist", ],
          L: ["Heated seats", "Leather seats", "Navigation", "Parking assist", "Rear view camera", "Seat heating"],
          Business: [],
          GTLine: []
        }
      },
      {
        code: "car-super-max",
        categories: ["GT", "ElectricEngine"],
        engineTypes: ["64kWh"],
        name: "Car Super Max",
        colors: ["LightBlue", "Pink", "Yellow", "Silver"],
        versions: ["Business", "GTLine"],
        equipment: {
          S: [],
          M: [],
          L: [],
          Business: ["Heated seats", "Leather seats", "Navigation", "Parking assist", "Rear view camera", "Seat heating"],
          GTLine: []
        }
      }
    ]
  }
}

export const CarConfiguratorContext = createContext<CarConfiguratorContextType>(defaultConfiguratorContext);
export const useCarConfigurationContext = () => useContext<CarConfiguratorContextType>(CarConfiguratorContext);

export default function CarConfiguratorWrapper(props: Props) {

  const conf = defaultConfiguratorContext;

  return (
    <CarConfiguratorContext.Provider value={conf}>
      {props.children}
    </CarConfiguratorContext.Provider>
  )
} 