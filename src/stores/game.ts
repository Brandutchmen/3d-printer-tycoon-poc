import { defineStore } from "pinia";

// Game Setup - fixed budget to create game
// Each purchase / sale / etc will take time after game begins
// Game will end when budget is depleted or reviews are too low

// Rent - fixed cost depending on space
// Electricity cost - fixed cost depending on power usage
// Internet cost - fixed cost depending on internet usage
// Hosting cost - fixed cost depending on hosting usage

// Printer upgrade - space
// Printer upgrade - speed
// Printer upgrade - reliability - moisture control, dust, etc

// Space management - store printers, inventory, shipping supplies, or filament in space

// Warehouse information - space, inventory, shipping supplies, filament
// warehouse resources - space (shelves), power delivery, networking, desks for packing, r&d labs, etc.
// Upgrade to have battery backup / generators for power outage

// Marketing - social media, email, etc. Web presence, SEO, etc.

// Employees - payroll, management, hr,
// Employee - running printers
// Employee - optimize logistics
// Employee - optimize marketing
// Employee - optimize r&d
// Employee - auto fix failed print

// Pay tax

// Random events - filament shortage, shipping delays, power outage

// Rival companies - steal customers, steal employees, steal r&d, etc, sabotage

export const useGameStore = defineStore("game", {
  state: () => {
    return {
      stats: {
        money: {
          name: "Money",
          value: 0,
        },
        printersInUse: {
            name: "Printers In Use",
            value: 0,
        },
        printersOwned: {
            name: "Printers Owned",
            value: 0,
        },
      },
      printers: [],
      availablePrinters: [
        {
          name: "xyz 3D printer",
          cost: 600,
          speed: 3,
          warmup_time: 10,
          cooldown_time: 10,
          power_usage: 10,
          reliability: 0.75,
        },
        {
          name: "abc 3D printer",
          cost: 1000,
          speed: 6,
          warmup_time: 10,
          cooldown_time: 10,
          power_usage: 11,
          reliability: 0.97,
        },
      ],
    };
  },
  actions: {
    addMoney(amount: number) {
      this.stats.money.value += amount;
    },
    buyPrinter(printer: any) {
        if (this.stats.money.value < printer.cost) {
            alert("Not enough money!")
            return;
        }
        this.stats.money.value -= printer.cost;

        this.stats.printersOwned.value += 1;
        const newPrinter = printer
        newPrinter.in_use = false;
        this.printers.push(newPrinter);
    },
    startPrint(printer: any) {
        if (printer.in_use) {
            alert("Printer already in use!")
            return;
        }
        printer.in_use = true;
        this.stats.printersInUse.value += 1;
        // Create promise to resolve after printer is done. After that, add return in_use to false and reduce printersInUse by 1
        // Also, add money based on speed
        setTimeout(() => {
            printer.in_use = false;
            // Determine if printer failed
            if (Math.random() > printer.reliability) {
                alert("Printer failed!")
                this.stats.printersInUse.value -= 1;
                return;
            }
            this.stats.printersInUse.value -= 1;
            this.stats.money.value += 50;
            alert("Printer done!")
        }, printer.warmup_time * 1000 + printer.cooldown_time * 1000 + printer.speed * 1000);
    }
  },
  persist: false,
});
