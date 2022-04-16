import * as React from "react"
import Layout from '../components/Layout';
import CarConfiguratorWrapper from "../wrappers/CarConfiguratorWrapper";
import CarSelector from '../components/CarSelector';
import { Router } from '@reach/router';
import Configurator from './configurator/[key]';

export default function CarSelectorContainer() {
  return (
    <CarConfiguratorWrapper>
      <Layout>
        <>
          <Router>
            <Configurator path="/configurator/:key"/>
          </Router>
          <CarSelector/>
        </>
      </Layout>
    </CarConfiguratorWrapper>
  );
}