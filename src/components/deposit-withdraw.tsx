import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";


// deposit/withdraw widget
const DepositWithdrawUI = () => {
    const [mode, setMode] = useState("deposit");

    return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Deposit and Withdraw</CardTitle>
          </CardHeader>
          <CardContent>
            
          </CardContent>
        </Card>
      );


};

export default DepositWithdrawUI;