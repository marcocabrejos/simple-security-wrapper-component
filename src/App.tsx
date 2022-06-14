import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SecurityWrapper} from "./components/SecurityWrapper/SecurityWrapper";


const dataRoles = [
  {
    "id": "M_HOME",
    "description": "This is the module's description.",
    "parent": "M_HOME",
    "roles": [
      "Console.Home.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_FRAUD_PREVENTION",
    "description": "This is the module's description.",
    "parent": "M_FRAUD_PREVENTION",
    "roles": [
      "Console.FraudPrevention.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_MERCHANTS",
    "description": "This is the module's description.",
    "parent": "M_MERCHANTS",
    "roles": [
      "Console.Merchants.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_TRANSACTIONS",
    "description": "This is the module's description.",
    "parent": "M_TRANSACTIONS",
    "roles": [
      "Console.Transaction.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_TRANSACTIONS.TRANSACTIONS",
    "description": "This is the module's description.",
    "parent": "M_TRANSACTIONS.TRANSACTIONS",
    "roles": [
      "Console.Transaction.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_TRANSACTIONS.PAYOUTS_TRANSACTION",
    "description": "This is the module's description.",
    "parent": "M_TRANSACTIONS.PAYOUTS_TRANSACTION",
    "roles": [
      "Console.Transaction.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_TRANSACTIONS.CHARGEBACK",
    "description": "This is the module's description.",
    "parent": "M_TRANSACTIONS.CHARGEBACK",
    "roles": [
      "Console.Transaction.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_MONITORING",
    "description": "This is the module's description.",
    "parent": "M_MONITORING",
    "roles": [
      "Console.Monitoring.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_USERS",
    "description": "This is the module's description.",
    "parent": "M_USERS",
    "roles": [
      "Console.Users.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_BILLING_DASHBOARD_EXECUTOR",
    "description": "This is the module's description.",
    "parent": "M_BILLING_DASHBOARD_EXECUTOR",
    "roles": [
      "Console.Billing.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_BILLING_DASHBOARD_EXECUTOR.EXECUTOR",
    "description": "This is the module's description.",
    "parent": "M_BILLING_DASHBOARD_EXECUTOR.EXECUTOR",
    "roles": [
      "Console.Billing.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_BILLING_DASHBOARD_VALIDATOR",
    "description": "This is the module's description.",
    "parent": "M_BILLING_DASHBOARD_VALIDATOR",
    "roles": [
      "Console.Billing.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_BILLING_DASHBOARD_VALIDATOR.VALIDATOR",
    "description": "This is the module's description.",
    "parent": "M_BILLING_DASHBOARD_VALIDATOR.VALIDATOR",
    "roles": [
      "Console.Billing.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_BILLING_DASHBOARD_VALIDATOR",
    "description": "This is the module's description.",
    "parent": "M_BILLING_DASHBOARD_VALIDATOR",
    "roles": [
      "Console.Billing.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_CONCILIATION_VALIDATOR.CONCILIATIONVALIDATOR",
    "description": "This is the module's description.",
    "parent": "M_CONCILIATION_VALIDATOR.CONCILIATIONVALIDATOR",
    "roles": [
      "Console.Conciliation.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_CONCILIATION_EXECUTOR",
    "description": "This is the module's description.",
    "parent": "M_CONCILIATION_EXECUTOR",
    "roles": [
      "Console.Conciliation.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_CONCILIATION_EXECUTOR.CONCILIATIONEXECUTOR",
    "description": "This is the module's description.",
    "parent": "M_CONCILIATION_EXECUTOR.CONCILIATIONEXECUTOR",
    "roles": [
      "Console.Conciliation.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_REFUNDS_CONTROL",
    "description": "This is the module's description.",
    "parent": "M_REFUNDS_CONTROL",
    "roles": [
      "Console.RefundsControl.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_MGUAYAQUIL",
    "description": "This is the module's description.",
    "parent": "M_BILLING_DASHBOARD_VALIDATOR",
    "roles": [
      "Console.MGuayaquil.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_CONCILIATION_DASHBOARD",
    "description": "This is the module's description.",
    "parent": "M_CONCILIATION_DASHBOARD",
    "roles": [
      "Console.Conciliation.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_RETRY_RULES",
    "description": "This is the module's description.",
    "parent": "M_BILLING_DASHBOARD_VALIDATOR",
    "roles": [
      "Console.RetryRules.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_GLOBAL_CONFIG",
    "description": "This is the module's description.",
    "parent": "M_GLOBAL_CONFIG",
    "roles": [
      "Console.GlobalConfig.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_COMPLIANCE",
    "description": "This is the module's description.",
    "parent": "M_COMPLIANCE",
    "roles": [
      "Console.Compliance.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_COMPLIANCE.COMPLIANCE_ALARMS",
    "description": "This is the module's description.",
    "parent": "M_COMPLIANCE.COMPLIANCE_ALARMS",
    "roles": [
      "Console.Compliance.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "COMPLIANCE.COMPLIANCE_EXECUTIVES",
    "description": "This is the module's description.",
    "parent": "COMPLIANCE.COMPLIANCE_EXECUTIVES",
    "roles": [
      "Console.Compliance.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_SUPPORT",
    "description": "This is the module's description.",
    "parent": "M_SUPPORT",
    "roles": [
      "Console.Support.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_CONCILIATION_TRANSACTIONAL",
    "description": "This is the module's description.",
    "parent": "M_CONCILIATION_TRANSACTIONAL",
    "roles": [
      "Console.ConciliationTransactional.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_CONCILIATION_TRANSACTIONAL.TRANSACTIONAL_CONCILIATION",
    "description": "This is the module's description.",
    "parent": "M_CONCILIATION_TRANSACTIONAL.TRANSACTIONAL_CONCILIATION",
    "roles": [
      "Console.ConciliationTransactional.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_BANK_CONCILIATION",
    "description": "This is the module's description.",
    "parent": "M_BANK_CONCILIATION",
    "roles": [
      "Console.BackConciliation.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_BANK_CONCILIATION.BANK_CONCILIATION_SUMMARY",
    "description": "This is the module's description.",
    "parent": "M_BANK_CONCILIATION.BANK_CONCILIATION_SUMMARY",
    "roles": [
      "Console.BackConciliation.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_BANK_CONCILIATION.BANK_CONCILIATION_SUMMARY.BANK_CONCILIATION_SUMMARY",
    "description": "This is the module's description.",
    "parent": "M_BILLING_DASHBOARD_VALIDATOR",
    "roles": [
      "Console.BackConciliation.Read"
    ],
    "type": "MODULE"
  },
  {
    "id": "M_BANK_CONCILIATION.BANK_CONCILIATION_SUMMARY.BANK_CONCILIATION_TRANSACTIONS",
    "description": "This is the module's description.",
    "parent": "M_BANK_CONCILIATION.BANK_CONCILIATION_SUMMARY.BANK_CONCILIATION_TRANSACTIONS",
    "roles": [
      "Console.BackConciliation.Read"
    ],
    "type": "MODULE"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SecurityWrapper requiredRoles={dataRoles}
                         componentId={"M_BILLING_DASHBOARD_VALIDATOR"}
                         userRoles={[]}>
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button>
            Botón simple
          </button>
        </SecurityWrapper>
      </header>
    </div>
  );
}

export default App;
